import Header from "./header.jsx";
import AddContact from "./add";
import ContactList from "./conlist";
import PayeeDetails from "./payeedetails"
import { useEffect, useState } from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {Route,Routes} from "react-router-dom";


function App() {
  const [Payee,SetPayee]=useState([]);
  const LOCAL_storage="Payers";

  const addHandler=(contact)=>{
    console.log("i have run");
    SetPayee([...Payee,{id: uuidv4(),...contact}])
  }

  // useEffect(()=>{
  //   const PayeeInfo =  JSON.parse(localStorage.getItem(LOCAL));
  //   if(PayeeInfo) SetPayee(PayeeInfo);
  // },[]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCAL_storage));
    if (items) {
     SetPayee(items);
    }
  }, []);
  
  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_storage,JSON.stringify(Payee));  
  // },[Payee]);

  useEffect(() => {
    localStorage.setItem(LOCAL_storage, JSON.stringify(Payee));
  }, [Payee]);
  
  const getID=(id)=>{
    console.log("i amapp i have got "+id);
    const copyPay=Payee.filter((payer)=>{
      return payer.id!==id;
    })
    SetPayee(copyPay);
  }
  
  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/" element={<ContactList contacts={Payee} deleteHandler={getID}/>}/>
        <Route path="/add" element={  <AddContact addHandler={addHandler}/>}/>
       <Route path="/payee/:id" element={<PayeeDetails/>}/>
      </Routes>
      
    </div>
    )
}

export default App;
