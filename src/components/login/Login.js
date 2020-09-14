import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { IconButton, Button } from '@material-ui/core'

// firebase "dependencies"
import {auth} from '../../firebase'

function Login() {
    const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    const login = event => {
        event.preventDefault() // prevents the pae from refreshing
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=> {
            //logged in, redirect to homepage
            history.push('/');
        })
        .catch((e) => alert(e.message))
    };

    const register = event => {
        event.preventDefault() // prevents the pae from refreshing
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
        //created a user and logged in, redict to homepage
        history.push('/');
        })
        .catch((e) => alert(e.message));

    }
    return (
        <div className='login__page'>
            <div className='login__searchBar'> </div>
            <div className='login__holder'>
                <form className='login__details'>
                    <h2> Login </h2>
                    <div className="login__entries-holder">
                        <label for='email'> Email address </label>
                        <input 
                        value={email} 
                        onChange={event=>setEmail(event.target.value) } 
                        type='email' 
                        /> 
                    </div>
                    <div className="login__entries-holder">
                        <label for='email'> Password </label>
                        <input 
                        value={password} 
                        onChange={event=>setPassword(event.target.value) }
                        type='password'
                        /> 
                    </div>  
                    <div className='login__button-holder'>
                        <button onClick={login} type='submit' className='login__button'> Login </button>
                        <div className='login__register-option'>
                            <p className='p-one'>New to Fakealot? </p>
                            <p className='p-two' onClick={register}>Create an Account</p>
                        </div>
                    </div> 
                    
                </form>
            
            </div>
        </div>
    )
}

export default Login
