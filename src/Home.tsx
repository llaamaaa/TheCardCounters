import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css";
import { Navigate, useNavigate } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();

    return (
        <div className="homeContainer">
            <div>
                <div className="navButton" onClick={(() => navigate("/Play"))}>
                    Play!
                </div>
                <div className="navButton" onClick={(() => navigate("/Learn"))}>
                    Learn!
                </div>
                <div className="navButton" onClick={(() => navigate("/Forum"))}>
                    Forum!
                </div>
            </div>
            <div className="mainView">
                <p></p>
                <a href="https://www.youtube.com/watch?v=PljDuynF-j0&pp=ygUJYmxhY2tqYWNr" target ="_blank">
                    <img src="src/assets/king_of_spades.png" width={200}></img>
                </a>
                
                <button onClick={() => signOut(auth)} className="logOut">
                Sign out
            </button>
            </div>
        
        </div>
    );
};

export default HomePage;