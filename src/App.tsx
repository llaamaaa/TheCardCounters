// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from 'firebase/app'
import { config } from './config'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Login'
import AuthRoute from './AuthRoute'
import HomePage from './Home'
import PlayPage from './Play'
import LearnPage from './Learn'
import ForumPage from './Forum'
import SignUpWithEmail from './SignUpWithEmail'
import CardCount from './CardCount'
import Game from './Game'
// import { CardSuit, CardValue } from './utils'
import PasswordReset from './PasswordReset'
import CreatePostPage from './createForum'


initializeApp(config.firebaseConfig);

export interface IApplicationProps {};

const App: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route
          path = "/"
          element = {
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
      <Route path="/login" element = {<LoginPage />} />
      <Route path="/SignUpWithEmail" element = {<SignUpWithEmail />} />
      <Route path="/Play" element = {<PlayPage />} />
      <Route path="/Learn" element = {<LearnPage />} />
      <Route path="/Forum" element = {<ForumPage />} />
      <Route path="/Game" element = {<Game />} />
      <Route path="/CardCount" element = {<CardCount />} />
      <Route path="/PasswordReset" element = {<PasswordReset />} />
      <Route path='/CreatePost' element={<CreatePostPage/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
 