import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/View/Home/Home';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}/>

              
            </Routes>
            <Footer></Footer>
            </BrowserRouter>
            
        </div>
    );
};

export default AppRoutes;