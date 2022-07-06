import React, {useState} from 'react'
import './Signin.css'
import signup from '../assets/signup.svg';
import Navbar from './Navbar';
import {useHistory} from 'react-router-dom';
import { userSchema } from './validation/loginValidation';


const Signin = () => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async(e) => {
        e.preventDefault();

        let formData = {
            email: email,
            password: password
        }

        const isValid = await userSchema.isValid(formData)

        if(!isValid){
            alert("You need to check some fields")
        }else{
            const res = await fetch('/signin', {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email,
                    password
                })
            });
    
            const data = res.json();

            if(data.status === 400 || !data){
                window.alert("Invalid credentials")
            }else{
                window.alert("Login Successful")
                history.push("/beforeRsi")
            }
        }
    }

    return (
        <>  <Navbar/>
            <div className="outer">
                <div className="right-out">

                </div>
                <div className="inner">
                    <div className="right">
                        <div className="img">
                            <img src={signup} alt=""/>
                        </div>
                        <div className="register">
                            <h1>LOGIN </h1>
                        </div>
                    </div>
                    <div className="content">
                        <br/><br/>
                        <label>Username</label><br />
                        <input 
                            type="email" 
                            className="input" 
                            placeholder="email" 
                            autoComplete="off" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            name="email"
                            ></input>
                            <br /><br />
                        <label>Password</label><br />
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="Your password" 
                            autoComplete="off" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            name="password" ></input>
                            <br /><br />
                        <br/>
                        <button 
                            className='button' 
                            onClick={loginUser}
                            
                        >Signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;