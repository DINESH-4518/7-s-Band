import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
                <Route path="/" element={<Content />} />
                <Route path="/home" element={<Content />} />
                <Route path="/music" element={<Music />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
        
    )
}

export default Home;