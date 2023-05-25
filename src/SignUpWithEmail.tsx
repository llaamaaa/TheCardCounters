import React, { useState } from 'react';

import { signInWithEmailAndPassword } from '@firebase/auth';

import {auth} from './config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const SignUpWithEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            console.log(useCredential);  
        })
        .catch((error) => {
            console.log(error);
        });
    };

return (
        <div>
            <p>Login Page</p>
            {/* <button onClick={() => signInWithGoogle()} disabled = {authing}>
                Sign in with Google
            </button> */}

            <div className='sign-in-container'>
            <form onSubmit={signIn}>
                
                <input type="email" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button type="submit">Log In</button>
            </form>
        </div> 
        <div>
        <a onClick={() => navigate('/SignUpWithEmail')}>
                Sign Up here!
            </a>
        </div>
        <ToastContainer />
        </div> 
        
    );
}

export default SignUpWithEmail;