import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={About} />
        <Route path="/blog" exact component={Blog} />
      </div>
      <Footer />
    </Router>
  
  );
}

export default App;
