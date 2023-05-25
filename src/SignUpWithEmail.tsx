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

    const handleWordClick = (word: any) => {
        console.log(`Clicked on word: ${word}`);
        // Perform navigation to a different page here
        navigate('/Login');
      };

return (
        <div>
            <h3>Sign up for cardcounters!</h3>
            <p>Create a free account or <span onClick={() => handleWordClick('login')}>login</span>
            </p> 

            <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <div>
                <input type="email" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                <input type="password" placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <div><button type="submit">Sign up now!</button>
                    </div>
            </form>
        </div> 
    
        <ToastContainer />
        </div> 
        
    );
}

export default SignUpWithEmail;