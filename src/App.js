import React, { useState, useEffect } from "react";
import "./styles.css";
import "./Post_Joe.css"
import './App.css';
import EduApp from "./EduApp";
import LiveApp from "./LiveApp";

//BEM convention
function App() {

const [completed, setCompleted] = useState(false);
const [inputId, setInputId] = useState("login");
const [theirname, setName] = useState("");

useEffect(() => {
  if (inputId === "LiveFeed" && !completed) {
  setCompleted(true);
  }
}, [completed, inputId]);

  return (
    <div className="app">
      {!completed ?
      (<EduApp 
        setInputId = {setInputId}
        inputId = {inputId} 
        theirname = {theirname}
        setName = {setName}
      />) : 
      (<>
      <LiveApp 
      theirname = {theirname}
      />
    </> )}
    </div>
  );
}

export default App;
