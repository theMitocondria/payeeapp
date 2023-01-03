import Header from "./header.jsx";
import AddContact from "./add";
import ContactList from "./conlist";
import { useState } from "react";
import './App.css';

function App() {
  const [Payee,SetPayee]=useState([]);
  
  const addHandler=(contact)=>{
    console.log("values rec");
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addHandler={addHandler}/>
      <ContactList contacts={Payee}/>
    </div>
    )
}

export default App;
