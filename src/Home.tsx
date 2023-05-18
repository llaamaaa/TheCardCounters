import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "./Home.css";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div className="homeContainer">
            <div>
                <div className="navButton">
                    Play!
                </div>
                <div className="navButton">
                    Learn!
                </div>
                <div className="navButton">
                    Forum!
                </div>
            </div>
            <div className="mainView">
                <p>Home Page</p>
                <img src="src/assets/king_of_spades.png" width={200}></img>
                <button onClick={() => signOut(auth)} className="logOut">
                Sign out
            </button>
            </div>
        
        </div>
    );
};

export default HomePage;