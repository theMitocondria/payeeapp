import React from 'react'
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom';

function card(props) {

  const {Name,Email,UPI,Date,Amount,id}=props.detail;
  
  return (

    <div className='item'>
        <img className='ui avatar image' src={Logo} alt="user" />
       
       <div className="content">
       <Link to={`/payee/${id}`} state={{ from: props.detail}}>
            <div className="header" style={{color:"black"}}>
                {Name}
            </div>
            <div>
                <span style={{color:"grey"}}>A payment link will be send to <strong>{Email}</strong> on <strong>{Date}</strong> of <strong>{Amount}</strong> for a payment trasfer UPI id : <strong>{UPI}</strong></span>
            </div>
            </Link> 
            <i 
            className='trash alternate outline icon' 
            style={{color:"red" , margin: "7px"}} 
            onClick={()=>props.getDeleteid(id)}
            ></i>
        </div> 
               
    </div>
    
  )
}

export default card
