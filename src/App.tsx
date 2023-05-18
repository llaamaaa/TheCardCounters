import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from 'firebase/app'
import { config } from './config'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Login'
import AuthRoute from './AuthRoute'
import HomePage from './Home'
import PlayPage from './Play'

initializeApp(config.firebaseConfig);

export interface IApplicationProps {};

const App: React.FunctionComponent<IApplicationProps> = (props) => {
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
      <Route path="/Play" element = {<PlayPage />} />

     </Routes>
    </BrowserRouter>
  );
};

export default App;
 