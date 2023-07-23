import React, {useState} from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import eyeSlash from "../src/assets/eye_slash.png";
import eye from "../src/assets/eye.png";



export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    

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


    // const handleWordClick = () => {
    //     console.log('Clicked on the word');
    //     signInWithGoogle();
    
    //   };

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
            <div>
                <img src="/assets/king_of_spades.png" width={75}  className="loginButton" onClick={(() => window.location.reload())}></img>
            </div>
            <div className='sign-in-container'>
                <form onSubmit={signIn}>
                <div className="inputemail">
                    <input className={`input__field ${isEmailValid(email) ? 'invalid' : ''}`} id = "email" type ='text' required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {
                            // const inputValue = e.target.value;
                            isEmailValid(email);
                          }}>
                    </input>
                    <label htmlFor="email" className ="input__label" >Email</label>
                    <span className="input__icon-wrapper">
                        <i className="input__icon ri eye-off-line"></i>
                    </span>
                </div>
                <div className="inputpw">
                <input className="input__field" id = "password" type={showPassword ? 'text' : 'password'} required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                    </input> 
                    <label htmlFor="password" className ="input__label" >Password</label>
                    <span className="input__icon-wrapper">
                    <i
                        className={`input__icon ri ${showPassword ? 'eye-off-line' : 'eye-line'}`}
                        >
                            <a onClick={handleTogglePassword}>
                            <img
                                src={showPassword ? eyeSlash : eye}
                                alt={showPassword ? "Hide" : "Show"}
                                width={20}
                            />
                            </a>
                        </i>

                    </span>
                </div>
                <div>
                    <a onClick={() => navigate('/PasswordReset')} className="signUp">
                Forgot password?
                </a>
                </div>
                    <div></div>
                    <button type="submit">Log In</button>
            </form>
        </div> 
        <div>
        <button onClick={() => signInWithGoogle()} disabled = {authing} className="google-button">
                <img src="/assets/googlejpg.avif" width={50} className="google-icon"></img>
                <span className="google-text">Sign up with Google</span>
            </button>
        
        <a onClick={() => navigate('/SignUpWithEmail')} className="signUp">
                New? Sign Up - and learning Blackjack!
            </a>
        </div>
            
        <ToastContainer />
        </div>
        
    );
};

export default LoginPage;