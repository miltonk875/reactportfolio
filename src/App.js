import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Service from './pages/Service';

import './assets/css/bootstrap-icons.css';
import './assets/css/bootstrap.min.css';
import './assets/css/boxicons.min.css';
import './assets/css/glightbox.min.css';
import './assets/css/style.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<h1>404 Page</h1>}/>
      </Routes>
    </Router>
  )
}

export default App