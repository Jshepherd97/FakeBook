import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Login_Joe.css'
import Logo from "./images/FakeBookIcon.png"
import Word from "./images/FakeBookLogo.png"

function Login({
    user, setUser
}) {

    const signIn = () => {
        setUser(true)
    };
    
    return (
        <div className='login'>
            <div className="login__logo">
                {/* <img src={Logo} alt =''/> */}
                <img src = {Word} alt = ''/>
            </div>
            <Button type='submit' onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login
