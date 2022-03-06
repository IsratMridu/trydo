import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/View/About/About';
import Blog from './Components/View/Blog/Blog';
import BlogDetails from './Components/View/BlogDetails/BlogDetails';
import Contact from './Components/View/Contact/Contact';
import Home from './Components/View/Home/Home';
import Services from './Components/View/Services/Services';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path='about' element={<About/>}/>
            </Routes>
            <Routes>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            <Routes>
                <Route path='services' element={<Services/>}/>
            </Routes>
            <Routes>
                <Route path='blog' element={<Blog/>}/>
            </Routes>
            <Routes>
                <Route path='blogDetails' element={<BlogDetails/>}/>
            </Routes>
            <Footer></Footer>
            </BrowserRouter>
            
        </div>
    );
};

export default AppRoutes;