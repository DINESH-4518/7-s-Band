import React from "react";
import Saketh from "../assets/Images/Saketh.jpg";

function Content(){
    return(
        <div className="content">
            <div className="content-section">
                <div className="content-text">
                    <h2>Welcome to Our World</h2>
                    <p>
                        Experience the best music like never before.
                        Discover the rhythm of life with 7s, where every note tells a story, and every performance ignites the soul. 
                        We are a symphony of passion, creativity, and pure musical prowess, blending genres and breaking boundaries to bring you a sound that is uniquely ours.
                    </p>
                    <p>
                        Our band is dedicated to bringing you the finest musical 
                        experiences, with a mix of classic and modern tunes that will keep you entertained.
                        Join us on a journey through sound, where each note tells 
                        a story and every performance is a memorable event.
                        Don't miss our upcoming shows and concerts. 
                        Stay tuned for dates and locations!
                    </p>
                </div> 
                <img src={Saketh} alt="Band" className="content-img"/>   
            </div>
        </div>
    );
}

export default Content;