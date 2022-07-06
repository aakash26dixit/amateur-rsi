import React , {useState, useEffect} from 'react'
import axios from "axios";
import './api.css';
import Navbar from './Navbar';

const Closing = () => {

  var [weekHigh, setWeekHigh] = useState();
  var [weekLow, setWeekLow] = useState();
  var [shortMovingAverage, setShortMovingAverage] = useState();
  var [longMovingAverage , setLongMovingAverage] = useState();
  
  var [status, setStatus] = useState('')
  var attr = [];

  const [company, setCompany] = useState()
  let [storeCompany, setStoreCompany] = useState(false)

  const [company1, setCompany1] = useState()
  let [storeCompany1, setStoreCompany1] = useState(false)

  const [company2, setCompany2] = useState()
  let [storeCompany2, setStoreCompany2] = useState(false)

  const [company3, setCompany3] = useState()
  let [storeCompany3, setStoreCompany3] = useState(false)

  const [company4, setCompany4] = useState()
  let [storeCompany4, setStoreCompany4] = useState(false)

  const [company5, setCompany5] = useState()
  let [storeCompany5, setStoreCompany5] = useState(false)

  const [company6, setCompany6] = useState()
  let [storeCompany6, setStoreCompany6] = useState(false)

  var getData1 = async() =>{
    
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${company}&apikey=0G490AIP8TIAN7R3`
      )

      setWeekHigh(res.data['52WeekHigh'])
      setWeekLow(res.data['52WeekLow'])
      setLongMovingAverage(res.data['200DayMovingAverage'])
      setShortMovingAverage(res.data['50DayMovingAverage']) 
      console.log(res)

        if(!res.data['52WeekHigh']){
          alert("Invalid Entry")
          setStatus(400)
        }
        else if(res.status !== null){
          setStatus(200)
        }
  } 

  var getData2 = (event) => {
    setCompany(event.target.value)
  }

  var textAuto = () => {
    
      if(setCompany){
        setCompany1(company)
      }
      if(setCompany1){
        setCompany2(company1)
      }
      if(setCompany2){
        setCompany3(company2)
      }
      if(setCompany3){
        setCompany4(company3)
      }
      if(setCompany4){
        setCompany5(company4)
      }
      if(setCompany5){
        setCompany6(company5)
      }    
  }

  return (
    <>
      <Navbar/> 
      <div className='all'>
        <div className="inputs">
          <div className='box-n-icon'>
            <input
              placeholder='Enter Company symbol, eg. AMZN for Amazon'
              className='inputBox'
              type='text'
              onChange={getData2}
            />
            <div className='go-icon' 
              onClick={() => {
                setStoreCompany(true)
                getData1()
                textAuto()
              }}
            >
            </div>
          </div>

          <div className='suggestion'>
          <h3>Your recent searches appear here..</h3>
            <div className="row1">
              <div className='row1-col1 cols'>{(status == 200) ? company1 :""}</div>
              <div className='row1-col2 cols'>{(status == 200) ? company2:""}</div>
              <div className='row1-col3 cols'>{company3}</div>
            </div>
            <div className="row2">  
              <div className='row2-col1 cols'>{company4}</div>
              <div className='row2-col2 cols'>{company5}</div>
              <div className='row2-col3 cols'>{company6}</div>
            </div>
          </div>
        </div>
        <div className='details'>
              <div className='details-row1'>
                <div className='detail-card-1'>
                  <div className='detail-data-1'>
                    <h3>{weekHigh}</h3> 
                  </div>
                  <h3>Week High</h3>
                </div>
                <div className='detail-card-2'>
                  <div className='detail-data-2'>
                    <h3>{weekLow}</h3> 
                  </div>
                  <h3>Week Low</h3>
                </div>
              </div>
              <div className='details-row2'>
              <div className='detail-card-3'>
                  <div className='detail-data-3'>
                    <h3>{shortMovingAverage}</h3> 
                  </div>
                  <h3>200<br/>Day Moving average</h3>
                </div>
                <div className='detail-card-4'>
                  <div className='detail-data-4'>
                    <h3>{longMovingAverage}</h3> 
                  </div>
                  <h3>50<br/>Day Moving average</h3>
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Closing
