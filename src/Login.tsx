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


    // const signIn = (e: { preventDefault: () => void; }) => {
    //     console.log('gg');
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((useCredential) => {
    //         console.log(useCredential);  
    //     })
    //     .catch((error) => {
    //         toast.error('💀', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             });
    //         console.log(error);
    //         console.log("abc");
    //     });
    // }

    const signIn = (e: React.FormEvent) => {
        e.preventDefault();
        setAuthing(true);
    
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate('/');
          })
          .catch((error) => {
            toast.error('💀', {
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
      };



    return (
        <div>
            <p>Login Page</p>
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

        
        <button onClick={() => signInWithGoogle()} disabled = {authing} className="google">
                <img src="src/assets/googlejpg.avif" width={50} ></img>
            </button>
            <p>Google</p>
        <ToastContainer />
        </div>
        
    );
};

export default LoginPage;