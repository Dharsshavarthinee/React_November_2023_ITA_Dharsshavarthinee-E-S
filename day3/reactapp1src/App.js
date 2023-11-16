import logo from './logo.svg';
import './App.css';

import StateProps from "./components/StateProps";
import Props from "./components/FuncProps";
import {useState} from "react";
function App()
{
  const[name,setName]=useState("Props : Dharssha");
  return(
    <div className="App">
      <Props username={name}/>
      <StateProps/>

    </div>
  );
};

export default App;
