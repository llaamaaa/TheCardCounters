import firebase from "firebase/compat/app";
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app, auth } from "./config";
import { getAuth } from "@firebase/auth";

const PasswordReset: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const sendPasswordReset = async () => {
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        alert('Password Reset Email Sent!');
      } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
          setErrorMessage(errorMessage);
        }
        console.log(error);
      }
    };
  
    return (
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={sendPasswordReset}>Send Password Reset Email</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };

export default PasswordReset;