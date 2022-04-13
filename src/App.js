import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (

    <Router>
      <Home />
    </Router>
    /*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
    </Routes>*/
  );
}

export default App;
