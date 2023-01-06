import React from 'react'
import Image from "../images/image.webp"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
function Payeedetails(props) {
  const location = useLocation()
  const { from } = location.state;
  console.log(from);
  const paymentLocation="https://www.udemy.com/course/datastructurescncpp/learn/lecture/13145030#overview";
  const loca=window.location.protocol + "//" + window.location.host +"/upi://pay?pa="+from.UPI+"&amp;pn="+from.Name+ "K&amp;cu="+from.Amount;
  console.log(loca);
  return (
    <div>
      <h1>bakwas</h1>
      <div className='main'>
        <div className='ui card centered'>
          <div className='image'>
            <img src={Image} alt="Not loading"/>
          </div>
          <div className='content'>
             <div className='header'>{from.Name}</div>
             <div>
              <a href={paymentLocation}>Pay</a>
              <a href={loca}>PayNow</a>
             </div>
          </div>
          <Link to="/"><button className='ui button blue' style={{margin:"10px"}}>Go to Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Payeedetails;