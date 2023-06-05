const PasswordReset: React.FunctionComponent = () => {
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
                    <img src="src/assets/king_of_spades.png" width={200} className="cardimg"></img>
                </a>
                
                <button onClick={() => signOut(auth)} className="logOut">
                Sign out
            </button>
            </div>
        
        </div>
    );
};

export default PasswordReset;