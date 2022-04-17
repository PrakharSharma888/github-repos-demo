import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Repositories from "./components/Repositories";


function App() {
  const [state, chstate] = useState("")
  const handleForm = (event) => {
    event.preventDefault(); 
    console.log(event.target[0].value);  
    chstate(event.target[0].value)  
  }
  
  return (
      <>
      <Navbar handleForm={handleForm}/>
      <Repositories searchValue={state}/>
      </>
  );
}

export default App;
