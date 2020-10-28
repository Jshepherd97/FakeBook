import { Button } from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import './Login_Joe.css';
import TextField from "@material-ui/core/TextField";
import InFeedGuide from "./Guide.jsx";
import guideInputs from "./guideInputs";
import Fakebook from "./images/FakeBookLogo.png";
// import FakebookIcon from "./images/FakeBookIcon.png";

function Login({
    setInputId,
    inputId,
    showButton,
    setButtonVisibility,
    setName,
    theirname,
    handleChange,
    setSignIn,
    signedIn
    }) {

    useEffect(() => {
        console.log(inputId);
        if (inputId === "login2" && !showButton) {
        setButtonVisibility(true);
        }
    }, [showButton, inputId]);
    
    useEffect(() => {
        console.log(inputId);
        if (inputId === "login21" && !showButton) {
        setButtonVisibility(true);
        }
    }, [showButton, inputId]);

    const signIn = () => {
        setSignIn(true)
        setInputId("start")
    };


    return (
        <div className='login'>
            <div className="login__logo">
                <img 
                src={'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'} alt =''/>
                <img className="FakeBook" src = {Fakebook} alt = ''/>
            </div>



            <InFeedGuide
            setInputId={setInputId}
            inputId={inputId}
            key={guideInputs[inputId].id}
            identifier={guideInputs[inputId].id}
            message={guideInputs[inputId].message}
            option1={guideInputs[inputId].option1}
            option2={guideInputs[inputId].option2}
            image={guideInputs[inputId].imgURL}
            />

        {showButton === true && (
            <form onSubmit={signIn} noValidate>
                <TextField
                onChange = {handleChange}
                variant = "outlined"
                required
                fullWidth
                id="fname"
                label="Your Name"
                name="fname"
                autoFocus
                value={theirname}
                />
            </form>
            )}

            {showButton === true && (

            <Button type='submit' onClick={signIn} >
                Sign In
            </Button>)}
        </div>
    )
}

export default Login
