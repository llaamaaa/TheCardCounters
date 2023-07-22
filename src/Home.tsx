import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    return (
        <div className="homeContainer">
            <div>
                <img src="/assets/king_of_spades.png" width={75}  className="homeButton" onClick={(() => window.location.reload())}></img>
            </div>
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
                    <img src="/assets/king_of_spades.png" width={200} className="cardimg"></img>
                </a>
                
                <button onClick={() => signOut(auth)} className="logOut">
                Sign out
            </button>
            </div>
        
        </div>
    );
};

export default HomePage;