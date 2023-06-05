import firebase from "firebase/compat/app";
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app, auth } from "./config";
import { getAuth } from "@firebase/auth";

const PasswordReset: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const sendPasswordReset = async () => {
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        alert('Password Reset Email Sent!');
        navigate('/');
      } catch (error: any) {
        const errorCode = error.code;
        
        if (errorCode === 'auth/invalid-email') {    
          setErrorMessage("You have entered an invalid email.");
        } else if (errorCode === 'auth/user-not-found')  {
            setErrorMessage("Email not found. Try Again?");
        } else {
            setErrorMessage("Please fill in this field👆🏻");
        }
       
      }
    };
   
  
    return (
      <div>
        <h3> 
            Forgot your password
        </h3>
        <h5>
            Enter the email address associated with your account and we'll send you a link to reset your password.
        </h5>
        <h5></h5>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <div></div>
        <button onClick={sendPasswordReset}>Send Password Reset Email</button>
        {errorMessage && <p>{errorMessage}</p>}
        <h5>Dont't have an account? <a onClick={() => navigate('/SignUpWithEmail')} className="signUp">
                Sign Up
            </a></h5>
        
      </div>
    
    );
  };

export default PasswordReset;