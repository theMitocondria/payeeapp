import Header from "./header.jsx";
import AddContact from "./add";
import ContactList from "./conlist";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [Payee,SetPayee]=useState([]);
  const LOCAL="Payers";

  const addHandler=(contact)=>{
    SetPayee([...Payee,contact])
  }

  useEffect(()=>{
    const PayeeInfo =  JSON.parse(localStorage.getItem(LOCAL));
    if(PayeeInfo) SetPayee(PayeeInfo);
  },[]);
  
  useEffect(()=>{
    localStorage.setItem(LOCAL,JSON.stringify(Payee));
    
  },[Payee]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addHandler={addHandler}/>
      <ContactList contacts={Payee}/>
    </div>
    )
}

export default App;
