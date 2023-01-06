import React from 'react'
import ContactCard from "./card";
import { Link } from 'react-router-dom';

function conlist(props) {
  const delet=(id)=>{
    props.deleteHandler(id);
    console.log("i have got a id of "+id);
  }
    const renderCOntactList=props.contacts.map((contact)=>{
        return(
          <ContactCard detail={contact} getDeleteid={delet}  key={props.id}></ContactCard>
        );
    })
  return (
    <div className='ui celled list'>
      <h3>Payee List</h3>
      <h1>Payee List <Link to="/add"><button className='ui button blue' style={{position:"absolute" ,right:"10px"}}>Add Payee</button></Link></h1>
      
      {renderCOntactList}
    </div>

  )
}

export default conlist
