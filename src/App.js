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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
