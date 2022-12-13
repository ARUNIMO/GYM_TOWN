import React from 'react';
import Login from './Login/login';
import Intro from './intro/intro';
import Sch from './sch/sch';
import Clas from './class/class';
import Contact from './contact/contact';
import { BrowserRouter,Route,Routes,Router, Link } from 'react-router-dom';
import Home from './Home/home';
import Layout from './layout';



//import './App.css'
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="Login/login" element={<Login />} />
            <Route path="intro/intro" element={<Intro />} />
            <Route path="contact/contact" element={<Contact />}/>
            <Route path="class/class" elements={<Clas />}/>
            <Route path="sch/sch" elements={<Sch />}/>
        </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}
export default App;
