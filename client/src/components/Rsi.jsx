import React, {useState, useEffect} from 'react'
import './Rsi.css';
import { useHistory } from 'react-router-dom';

import closing from './companyAssets/closing_price'

const Rsi = (props) => {

    const history = useHistory()

    const callAboutPage = async() => {
        try {
            const res = await fetch("/about", {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials:"include"
            })

            if(!res.status === 200){
                const error = new Error(res.error)
                throw error;
            }else{
    
            }
        } catch (error) {
            console.log(error)
            history.push("/signin")
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);


    var company_change = [];
    var company_average_profit = 0;
    var company_average_loss = 0;
    var relative_strength_index = 0;
    var relative_strength = 0;

    for(let i = 0; i < closing.length; i++){
        if(props.company === closing[i].companyName)
        {
            for(let j = 0; j < closing[i].price.length; j++){
                if(j === 0){
                }else{
                company_change[j - 1] = closing[i].price[j - 1] - closing[i].price[j]
                }
            }

            for(let i = 0 ; i < company_change.length ; i++){
                if(company_change[i] > 0){
                    company_average_profit = company_average_profit + company_change[i]
                    company_average_profit = company_average_profit / 14
                }
                if(company_change[i] < 0){
                    company_average_loss = company_average_loss + company_change[i]
                    company_average_loss = company_average_loss / 14
                }
            }


            relative_strength = company_average_profit / company_average_loss
            relative_strength_index = 100 - (100/(1 + relative_strength))
        }

        else{

        }
    }

    var investible = () => {
        if(relative_strength_index < 30){
            return "Sell if you have this stock"
        }else if(relative_strength_index > 70){
            return "Buy this stock"
        }
    }

    
    return(
        <>
            {
                relative_strength_index ? <h1>The RSI is</h1> :"" 
            }
            
            {
                relative_strength_index ? relative_strength_index :"" 
            }
            <br/>
            {
                relative_strength_index ? investible() : ""
            }
            <h1></h1>
        </>
    );

}

export default Rsi;