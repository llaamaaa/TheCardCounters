import React, {useState} from "react";
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";



export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

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


    const handleWordClick = () => {
        console.log('Clicked on the word');
        signInWithGoogle();
    
      };

      const signIn = (e: React.FormEvent) => {
        e.preventDefault();
        setAuthing(true);
      
        const isEmailInvalid = !isEmailValid(email); // Check if email is invalid
      
        if (!isEmailInvalid) {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log(userCredential);
              navigate('/');
            })
            .catch((error) => {
              toast.error('Wrong password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(error);
              setAuthing(false);
            });
        } else {
          toast.error('Invalid Email', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setAuthing(false);
        }
      };
      
      const isEmailValid = (email: string) => {
  // Perform your custom validation logic here
  // You can use regular expressions or any other technique to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};




    return (
        <div> 
            <div className='sign-in-container'>
                <form onSubmit={signIn}>
                <div className="inputemail">
                    <input className={`input__field ${isEmailValid(email) ? 'invalid' : ''}`} id = "email" type ='text' required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => {
                            const inputValue = e.target.value;
                            isEmailValid(email);
                          }}>
                    </input>
                    <label htmlFor="email" className ="input__label" >Email</label>
                    <span className="input__icon-wrapper">
                        <i className="input__icon ri eye-off-line"></i>
                    </span>
                </div>
                <div className="inputpw">
                <input className="input__field" id = "password" type ='password' required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                    </input> 
                    <label htmlFor="password" className ="input__label" >Password</label>
                    <span className="input__icon-wrapper">
                        <i className="input__icon ri eye-off-line"></i>
                    </span>
                </div>
                    <div></div><a onClick={() => navigate('/PasswordReset')} className="signUp">
                Forgot password?
            </a>
                    <div></div>
                    <button type="submit">Log In</button>
            </form>
        </div> 
        <div>
        <a onClick={() => navigate('/SignUpWithEmail')} className="signUp">
                Sign Up here!
            </a>
        </div>

        
        <button onClick={() => signInWithGoogle()} disabled = {authing} className="google">
                <img src="src/assets/googlejpg.avif" width={50} ></img>
            </button>
            <p className="google" onClick={handleWordClick}>Google</p>
        <ToastContainer />
        </div>
        
    );
};

export default LoginPage;