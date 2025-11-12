import React from "react";
import members from "../members";
import Entry from "./Entry";
import Band from "../assets/Images/Band.jpg";


function createCard(members){
    return (
    <Entry 
    key = {members.id}
    id = {members.id}
    name = {members.name}
    img = {members.imgURL}
    des = {members.des}
    />
  ); 
}

function About(){
    return(
        <nav className = "about">
            <h1>ABOUT US</h1>
            <p>
                Welcome to our official band page! We are thrilled to share our journey with you. Here’s a bit about us:
            </p>
            <div className="about-section">
                <img src={Band} alt="Band" className="about-image"/>
                <div className="about-text">
                    <h2>Journey</h2>
                    <p>
                        Our band was formed in 2023, when a group of music enthusiasts decided to come together and create something extraordinary. 
                        With diverse backgrounds and a shared love for music, we started performing at local gigs, gradually making our mark in the industry.
                    </p>
                    <h2>Mission</h2>
                    <p>
                        Our mission is to create music that resonates with people, inspires them, and brings joy to their lives. 
                        We believe in the power of music to transcend boundaries and connect souls.
                    </p>
                </div>
            </div>
            
            <div className="about-band">
                <h2>Meet the Band</h2>
                <div className="members">
                    {members.map(createCard)}
                </div>
            </div>

            <div className="about-achieve">
                <h2>Achievements</h2>
                <p className="achieve-p">
                    Over the years, we have been fortunate to achieve numerous milestones, including:
                </p>
                <ul className="about-ul">
                    <li>Winning the Best Music Band Award in 2023.</li>
                    <li>Releasing 7 successful albums.</li>
                    <li>Collaborating with renowned Student Tribe Warangal.</li>
                    <li>Performing at Sanskriti and FlashMobs.</li>
                </ul>

                <p>
                    We are constantly evolving and experimenting with new sounds. Our future plans include releasing more music, going on tours, and connecting with our fans worldwide. Stay tuned for more exciting updates!
                </p>

                <p>
                    Thank you for being part of our journey. Your support means the world to us!
                </p>
            </div>
        </nav>
    );
}

export default About;