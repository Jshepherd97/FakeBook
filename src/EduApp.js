
import React, { useState, useEffect } from "react";
import "./styles.css";
import "./Post_Joe.css"
import './App.css';
import Header from './Header_Joe';
import Sidebar from './Sidebar_Joe';
import Feed from './Feed_Joe';
import Widget from './Widget';
import Login from './Login_Joe';
import FriendRequest from "./FriendRequest";

//BEM convention
function EduApp({
    setInputId,
    inputId,
    theirname,
    setName}
) {
  const [signedIn, setSignIn] = useState();
  const [showButton, setButtonVisibility] = useState(false);
  // const [theirname, setName] = useState("");
  const [showFr, setFr] = useState(false)

  function handleChange (event){
      setName(event.target.value);
  }

  return (
    <div className="app">
      {!signedIn ?
      (<Login 
      setInputId={setInputId}
      inputId={inputId}
      showButton={showButton}
      setButtonVisibility={setButtonVisibility}
      handleChange={handleChange}
      theirname={theirname}
      setName={setName}
      signedIn={signedIn}
      setSignIn={setSignIn}
      />) : 
      (<>
      <Header 
        theirname={theirname}
      />
      <div className="app__body">
      <Sidebar theirname={theirname}/>
      <Feed    
      setInputId={setInputId}
      theirname={theirname}
      inputId={inputId}/>

      <FriendRequest
      showFr={showFr}
      setFr={setFr}
      inputId={inputId}
      setInputId={setInputId}
      />
      <Widget />


    </div>
    </> )}
    </div>
  );
}

export default EduApp;
