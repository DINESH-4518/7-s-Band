import React from "react";
import Music from "./Music";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";

function Toggle(){

    return(
        <nav className="toggle">
            <Link to = "/home">
                <button>
                    <span>Home</span>
                </button>
            </Link>

            <Link to = "/music">
                <button>
                    <span>Music</span>
                </button>
            </Link>
            
            <Link to = "/about">
                <button>
                    <span>About</span>
                </button>
            </Link>

            <Link to = "/contact">
                <button>
                    <span>Contact</span>
                </button>
            </Link>
        </nav>
    );
}

export default Toggle;