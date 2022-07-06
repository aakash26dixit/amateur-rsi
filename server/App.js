const mongoose = require('mongoose')              // used to access mongodb with MERN
const dotenv = require('dotenv')                  // Yeh Humein kuch sensitive data rakhne ke liye jaise yahan pe humne database se connection wala info config.env mein rakha hai
const express = require('express');               // 
const app = express();

dotenv.config({ path: './config.env' });    // Similar to import stmt. 
require('./db/conn')                        
require('./model/userSchema');

app.use(express.json()); 

app.use(require('./router/auth'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})