import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
import './Signup.css';
import { userSchema } from './validation/signupValidation';

const Register = () => {

    const [formErrors , setFormErrors] = useState({})

    const history = useHistory();

    let name, value;

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    })

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    } 

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formErrors));
    //     setIsSubmit(true)
    // }

    // useEffect(() => {
    //     if(Object.keys(formErrors.length === 0 && isSubmit)){
    //         console.log(user)
    //     }
    // }, [formErrors])

    // const validate = (e) => {
    //     const errors = {}
    //     var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //     if(!user.name){
    //         errors.name = "Name is required"
    //     }
    //     else if(!user.email){
    //         errors.email = "Email is required"
    //     } else if(!regex.test(user.email)){
    //         errors.email = "Email is improper"
    //     }
    //     else if(!user.phone){
    //         errors.phone = "Phone is required"
    //     }
    //     else if(!user.work){
    //         errors.work = "Work is required"
    //     }
    //     else if(!user.password){
    //         errors.password = "Password is required"
    //     }
    //     else if(!user.cpassword){
    //         errors.cpassword = "Confirm password is required"
    //     }
    //     else if(user.password != user.cpassword){
    //         errors.cpassword = "passwrds are not same"
    //     }
    //     return errors;
        
    // }

    const PostData = async (e) => {
        
        const isValid = await userSchema.isValid(user)
        console.log(isValid)
      
        
        if(isValid){
            const { name, email, phone, work, password, cpassword } = user;
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                })
            })
            const data = await res.json();
            if (data.status === 422 || !data) {
                window.alert("Invalid Registration")
                console.log("Invalid Registration")
            } else {
                window.alert("Registration Successful")
                console.log("Registration Successful")
                history.push("/signin")
            }
        }
    
    }

    return (
        <>
            <div className="outer_div">
                <Navbar />
                <div className="inner_div"><br />
                    <div className="inner_div_left">
                        <h1>
                            Smart investing <br /> some clicks away!
                        </h1>
                    </div>
                    <form 
                        // onSubmit={handleSubmit}
                    >
                        <div className="inner_div_all">
                            <h1>Signup</h1>
                            <div className="wrapper">
                                <div className="input_data">
                                    <input   type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={handleInputs}
                                        autoComplete="none"
                                        
                                    /><br />
                                    <label>Name</label>
                                    <p>{formErrors.name}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input_data">
                                    <input type="text"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputs}
                                        autoComplete="none"
                                    />
                                    <label>Email</label>
                                    <p>{formErrors.email}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input_data">
                                    <input type="text"
                                        name="phone"
                                        value={user.phone}
                                        autoComplete="none"
                                        onChange={handleInputs}
                                        minLength="10"
                                    />
                                    <label>Phone</label>
                                    <p>{formErrors.phone}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input_data">
                                    <input type="text"
                                        name="work"
                                        value={user.work}
                                        autoComplete="none"
                                        onChange={handleInputs} />

                                    <label>Work</label>
                                    <p>{formErrors.work}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input_data">
                                    <input type="text"
                                        name="password"
                                        value={user.password}
                                        autoComplete="none"
                                        onChange={handleInputs} />

                                    <label>Password</label>
                                    <p>{formErrors.password}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input_data"> 
                                    <input type="text"
                                        name="cpassword"
                                        value={user.cpassword}
                                        autoComplete="none"
                                        onChange={handleInputs} />

                                    <label>Confirm Password</label>
                                    <p>{formErrors.cpassword}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input_data">
                                    <input type="button"
                                        onClick={PostData}
                                    />
                                    <label></label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
