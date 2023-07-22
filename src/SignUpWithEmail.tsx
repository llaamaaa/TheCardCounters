import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from '@firebase/auth';

import {auth} from './config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SignUpWithEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate('/login');
          })
          .catch((error) => {
            toast.error('Error: ' + error.message, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
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

            <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <div>
                    <p>Email</p>
                <input type="email" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <p>Password</p>
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