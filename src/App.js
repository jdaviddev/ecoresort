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
import Promociones from './pages/promociones';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/daypass" element={<DayPassPage />} />
        <Route path="/promociones" element={<Promociones />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
