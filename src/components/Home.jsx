import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./Header";
import Toggle from "./Toggle";
import Music from "./Music";
import About from "./About";
import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";

function Home(){

    const year = new Date().getFullYear();

    return(
        <div className="home">
            <Header />
            <Toggle />
            <Routes>
                <Route path="/" element= {<Content />} />
                // <Route index element={<Content />} />
                <Route path="/Home" element={<Content />} />
                <Route path="/music" element={<Music />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Content />} />
            </Routes>
            <Footer />
        </div>
        
    )
}

export default Home;