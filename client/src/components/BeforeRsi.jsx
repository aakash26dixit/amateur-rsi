import React, { useState } from 'react'
import './BeforeRsi.css';
import Rsi from './Rsi';
import Navbar from './Navbar';

const BeforeRsi = () => {

    const [company, setCompany] = useState("");
    const [fullCompany, setFullCompany] = useState("");

    const companyInputEvent = (event) => {
        setCompany(event.target.value)
    }

    const details = () => {
        setFullCompany(company)
    }

  return (
        <>
        <Navbar/>
            <div class="main">
            RSI Indicator
                 <label>Enter company name</label><br/>
                 <input 
                    type="text"
                    onChange={companyInputEvent}
                    required
                    value={company}
                /><br />   
                <button onClick={details}> RSI </button>   
            
                <div className="Rsi">
                    <Rsi
                        company = {fullCompany}
                    />
                </div>
            </div>


            
        </>
  )
}





export default BeforeRsi;

