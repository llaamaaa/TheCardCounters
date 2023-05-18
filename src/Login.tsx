import React, {useState} from "react";
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import SignIn from "./SignInWithEmail";



export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    

    const signInWithGoogle =async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
        .then((response) => {
            console.log(response.user.uid);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
            setAuthing(false);
        });
        
    };

    const signInForm = document.getElementById('signin-form');

if (signInForm) {
  signInForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email-input') as HTMLInputElement;
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      // Sign in with email and password using Firebase
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      // Access the signed-in user data
      const user = userCredential.user;
      console.log('Signed in successfully:', user);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  });
}




    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signInWithGoogle()} disabled = {authing}>
                Sign in with Google
            </button>
            <button onClick = {() => SignIn} disabled = {authing}>
                Sign in with email
            </button>
        </div>
    );
};

export default LoginPage;