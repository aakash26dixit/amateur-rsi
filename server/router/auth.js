const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken'); 
router.use(express.json());
const User = require('../model/userSchema')
const Admin = require('../model/adminSchema');
const authenticate = require("../middleware/authenticate");

const middleware = (req, res, next) => {           // yeh middleware hai,
    console.log("Hello from middleware");          // agar user ko about page nahi dikhana hai agar
    next();                                        // vo registered user nahi hai toh
}                                                  // middleware iss baat ka khayal rakhta hai

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill the fields properly" });
    }

    try {
        const userExist = await User.findOne({ email: email })
        
        if (userExist) {
            return res.status(422).json({ error: "Email already in use" });
        }

        const user = new User({ name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword })
        
        await user.save();
        res.status(201).json({ message: "User registered successfully" })
    } catch (err) {
        console.log(err)
    }
})

router.post('/adminRegistration', async(req, res) => {
    const { adminName, password, cpassword } = req.body;
    
    if (!adminName || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill the fields properly" });
    }

    try {
        const adminExist = await Admin.findOne({ adminName: adminName })
        
        if (adminExist) {
            return res.status(422).json({ error: "Email already in use" });
        }

        const admin = new Admin({adminName:adminName, password:password, cpassword:password})
        await admin.save();
        res.status(201).json({ message: "User registered successfully" })

    } catch (error) {
        console.log(error)
    }
})

router.use('/adminLogin' , async(req,res) => {
    const {adminName, password, cpassword} = req.body;
    
    if (!adminName || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill the fields properly" });
    }
    const adminLogin = await Admin.findOne({adminName: adminName})
    
    if(adminLogin){
        const isMatch = await bcrypt.compare(password, adminLogin.password);
    

        if (!isMatch) 
        {
            res.status(400).json({ error: "Invalid credentials" });
            console.log(isMatch)
        }
        else 
        {
            res.json({ message: "admin signin successful" });
        }
    }
    else{
        res.status(400).json({ error: "Invalid credentials" });
    }
})

router.use('/signin', async (req, res) => {
    try {           
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz fill the fields properly" });
        }

        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
 
            const token = userLogin.generateAuthToken();

            res.cookie("jwtoken", token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials" });
                console.log(isMatch)
            }
            else {
                res.json({ message: "user signin successful" });
            }
        }
        else{
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/', (req, res) => {
    res.send("Hello from the server");
})

router.post('/about', middleware, async(req, res) => {
    
    // const {name, initYear, finalYear} = req.body;    
    // try {
    //     const companyExists = await company.findOne({companyName:name})
    //     console.log(companyName)
    // } catch (err) {
    //     console.log(err)
    // }
})


router.get('/beforeRsi' , authenticate, async(req,res) => {
    console.log()

})

router.get('/contact', (req, res) => {
    res.cookie('Test','Aakash')
    res.send("Hello contact from the server");
})

module.exports = router;