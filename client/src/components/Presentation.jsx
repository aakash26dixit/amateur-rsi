import React from 'react'
import data from './companyAssets/companiesData';
import './presentation.css';

const Presentation = (props) => {
    let total = parseFloat(props.amount)
    let diff1 = (props.initialYear - 2000) + 2000;
    let diff2 = (2021 - props.initialYear) + 2000;
    for (let index = 0; index < data.length; index++) {
        if (props.companyName.toLowerCase() === data[index].companyName.toLowerCase()) {
            for (let i = 2000; i <= 2021; i++) {
                if ((i < diff1) || (i > diff2)) {

                }
                else {
                    total = total + ((data[index].returns[i] / 100) * parseFloat(props.amount));
                }
            }
        } else {

        }
    }
    return (
        <>
            <div>
                <h1 className='resultAmount'>{total ? total.toFixed(3).toString() : ""}</h1>
            </div>


        </>
    )
}

export default Presentation