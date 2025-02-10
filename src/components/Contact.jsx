import React from "react";
import contactinfo from "../ContactInfo";
import Card from "./Card";

function Contact(){
    return(
        <nav className = "contact">
            <h1> CONTACT US </h1>
            <dl className="dictionary">
                {contactinfo.map(contactEntry => (
                    <Card 
                        key = {contactEntry.id}
                        id = {contactEntry.id}
                        emoji = {contactEntry.emoji}
                        meaning = {contactEntry.meaning}
                    />
                )
            )}

            </dl>
            <p className="end"> 
                Our band has the privilege of collaborating with several renowned artists and musicians. 
                From joint performances to co-producing tracks, our journey has been enriched by these partnerships. 
                If you are an artist or a producer interested in collaborating with us, we would love to hear from you. 
                If you have want to have performance or have any suggestions please do not hesitate to contact us.
            </p>
        </nav>
    );
}

export default Contact;