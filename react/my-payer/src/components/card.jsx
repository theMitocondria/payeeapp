import React from 'react'
import Logo from "../images/logo.png"
function card(props) {
  const {Name,Email,UPI,Date,Amount}=props.detail;
  return (
    <div className='item'>
        <img className='ui avatar image' src={Logo} alt="user" />
        <div className="content">
            <div className="header">
                {Name}
            </div>
            <div>
                <span>A payment link will be send to <strong>{Email}</strong> on <strong>{Date}</strong> of <strong>{Amount}</strong> for a payment trasfer UPI id : <strong>{UPI}</strong></span>
                <i className='trash alternate outline icon' style={{color:"red" , margin: "7px"}}></i>
            </div>
        </div>
            
    </div>
  )
}

export default card
