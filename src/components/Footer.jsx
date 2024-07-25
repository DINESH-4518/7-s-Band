import React from "react";

function Footer(){

    const year = new Date().getFullYear();
    return(
        <nav className = "footer">
            <p> Copyright ©️ {year}  7's BAND - All Rights Reserved. </p>
        </nav>
    );
}

export default Footer;