import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './apps/Home';
import About from './apps/About';
import Project from './apps/Project';
import Contact from './apps/Contact';
import Question from './apps/Question';
import Navbar from './Navbar';
import Footer from './Footer';
import PageNotFound from './PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

  <Navbar/>
  <Routes>

     <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
        <Route path="/project" element={<Project/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
            <Route path="/qna" element={<Question/>}/> 
               
   
   <Route path="/*" element={<PageNotFound/>}/>
   
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);

