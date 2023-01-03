import React from 'react'
import ContactCard from "./card";

function conlist(props) {
    const renderCOntactList=props.contacts.map((contact)=>{
        return(
          <ContactCard detail={contact}></ContactCard>
        );
    })
  return (
    <div className='ui celled list'>
      {renderCOntactList}
    </div>

  )
}

export default conlist
