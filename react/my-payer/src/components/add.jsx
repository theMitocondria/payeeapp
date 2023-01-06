import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Add(props) {
    const [temp,Settemp]=useState({
        Name:"",
        Email:"",
        UPI:"",
        Date:"",
        Amount:""

    })

    const handlesubmit=(e)=>{
        e.preventDefault();

        if(temp.Name ===""  ||  temp.Email ==="" || temp.UPI === ""  ||  temp.date === ""  ||  temp.Amount ==="" ){
            alert("ALL VALUES ARE MANDATORY");
            console.log(temp);
            console.log("values");
            return;
        }

        props.addHandler(temp);

        Settemp({
            Name:"",
            Email:"",
            UPI:"",
            Amount:"",
            Date:""
        });
    }

    const handlechange=(e)=>{
        const {name,value}=e.target;
        Settemp((prev)=>{
            return{...prev,[name]:value};
        })
    }

  return (
    <div className='ui main'>
      <form className='ui form'  onSubmit={handlesubmit}>
        <h1>Add Payee</h1>
        <h1>Add Payee</h1>
        <div  className='field'>
            <label>Name</label>
            <input 
            type="text" 
            placeholder='Write the name of payee'
            name="Name"
            value={temp.Name}
            onChange={handlechange}
            />
            <label>Email</label>
            <input 
            type="email" 
            placeholder='Write the email you want the triggered link shoul appear on'
            name='Email'
            value={temp.Email}
            onChange={handlechange}
            />
            <label>UPI id</label>
            <input 
            type="password" 
            placeholder='Upi id you want money on'
            name="UPI"
            value={temp.UPI}
            onChange={handlechange}
            />
            <label>Amount</label>
            <input 
            type="number"
            name="Amount"
            placeholder="Enter Amount of your Choice"
            value={temp.Amount}
            onChange={handlechange}
            />
            <label>Date</label>
            <input 
            type="date" 
            placeholder='Date of Generation'
            name="Date"
            value={temp.Date}
            onChange={handlechange}
            />
            
        </div>
        <button type='submit'  className='ui button blue'>Add</button>
        <Link to="/"><button className='ui button blue'>Go to Home</button></Link>
      </form>
    </div>
  )
}

export default Add
