import React, { useState } from 'react';
import './About.css';
import Presentation from './Presentation';
import Navbar from './Navbar';

const About = () => {

    const [amount, setAmount] = useState("");
    const [fullAmount, setFullAmount] = useState("");

    const amountInputEvent = (event) => {
        setAmount(event.target.value)
    }
    //---------------------------------------------------------------------------------//

    const [companyName, setCompanyName] = useState("");
    const [fullCompanyName, setFullCompanyName] = useState("")

    const companyNameInputEvent = (event) => {
        setCompanyName(event.target.value)
    }
    //---------------------------------------------------------------------------------//
    const [initialYear, setInitialYear] = useState();
    const [fullInitialYear, setFullInitialYear] = useState();

    const initialYearInputEvent = (event) => {
        setInitialYear(event.target.value)
    }

    //---------------------------------------------------------------------------------//

    const [finalYear, setFinalYear] = useState("")
    const [fullFinalYear, setFullFinalYear] = useState("")

    const finalYearInputEvent = (event) => {
        setFinalYear(event.target.value)
    }
    //---------------------------------------------------------------------------------//
    const details = () => {
        setFullCompanyName(companyName);
        setFullAmount(amount)
        setFullInitialYear(initialYear)
        setFullFinalYear(finalYear)
    }
    return (
        <>
            <Navbar />
            <div className="all">
                <div className="inputs">
                    <div class="inputAlignment">
                        <label>Enter Amount: </label><br/>
                        <input 
                            type="number"
                            onChange={amountInputEvent}
                            value={amount}
                            required
                            className='textfields'
                        /><br /><br />

                        <label>Enter Company name: </label><br/>
                        <input 
                            type="text"
                            onChange={companyNameInputEvent}
                            value={companyName}
                            required
                            className='textfields'
                        /><br /><br />

                        <label>Enter depositing Year: </label><br/>
                        <input 
                            type="number"
                            onChange={initialYearInputEvent}
                            value={initialYear}
                            required
                            className='textfields'
                        /><br /><br />

                        <label>Enter withdrawing Year: </label><br/>
                        <input 
                            type="number"
                            onChange={finalYearInputEvent}
                            value={finalYear}
                            required
                            className='textfields'
                        /><br /><br /><br/>
                    
                        <button onClick={details} >Presentation</button>
                    </div>

                    <div class="side">
                        <div class="quench">
                            <h1>Quench</h1><br/>    
                        </div>
                        <div class="thirst">
                            <h1>your thirst</h1><br/>    
                        </div>
                        <div class="here">
                            <h1>here</h1><br/>    
                        </div>
                    <hr/><hr/>
                    
                    </div>  
                </div>
                <div className="presentation">
                    <div class="worth">
                        {
                            (fullAmount , fullCompanyName , fullFinalYear, fullInitialYear) ? <h1>You Would be worth </h1>: ""
                        }
                    </div>
                    <div class="prst-component">
                        <Presentation
                            companyName={fullCompanyName}
                            amount={fullAmount}
                            initialYear={fullInitialYear}
                            finalYear={fullFinalYear}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

