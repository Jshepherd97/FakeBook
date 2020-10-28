import React, {useState} from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import Login from './Login'

//BEM convention
function LiveApp({theirname}) {
  return (
    <div className="app">
      <Header 
      theirname = {theirname} />
      <div className="app__body">
      <Sidebar theirname = {theirname}/>
      <Feed theirname = {theirname}/>
      <Widget />

    </div>
    </div>
  );
}

export default LiveApp;