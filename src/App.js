import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
  Link
} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import DayPassPage from './pages/daypass';


function App() {
  return (
    <BrowserRouter>
      <Routes basename= {process.env.PUBLIC_URL} >
        <Route path="/"  element={<Home/>} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/daypass" element={<DayPassPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
