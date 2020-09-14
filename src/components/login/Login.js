import React from 'react'
import './Login.css'
import { IconButton, Button } from '@material-ui/core'

function Login() {
    return (
        <div className='login__page'>
            <div className='login__searchBar'> </div>
            <div className='login__holder'>
                <form className='login__details'>
                    <h2> Login </h2>
                    <div className="login__entries-holder">
                        <label for='email'> Email address </label>
                        <input type='text' /> 
                    </div>
                    <div className="login__entries-holder">
                        <label for='email'> Password </label>
                        <input type='text'/> 
                    </div>  
                    <div className='login__button-holder'>
                        <button className='login__button'> Login </button>
                        <div className='login__register-option'>
                            <p className='p-one'>New to Fakealot? </p>
                            <p className='p-two'>Create an Account</p>
                        </div>
                    </div> 
                    
                </form>
            
            </div>
        </div>
    )
}

export default Login
