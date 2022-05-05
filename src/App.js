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
      <Routes>
        <Route path="/"  element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/daypass" element={<DayPassPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;