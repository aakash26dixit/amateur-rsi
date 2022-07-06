const mongoose = require('mongoose') 

const DB = process.env.DATABASE;                  // yeh config.env mein DATABASE naam ka variable use karne ke liye   

mongoose.connect(DB, {                            // yeh promise return karta hai
    
    useNewUrlParser: true,                        // yeh 4 lines likhna zaroori hai
    useCreateIndex: true,                         // varna deprecation warning aayega     
    useUnifiedTopology: true,                     // ya fir connection mein problem dega.
    useFindAndModify: false                       // 3 true aur ek false.   

}).then(() => {
    console.log("connection has been establised from database1");
}).catch((err) => console.log(err));
