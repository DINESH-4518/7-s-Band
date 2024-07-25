import React from "react";

function Card(props){
    return(
        <div className="card">
            <img src = {props.emoji} alt = "Icon" />
            <p>{props.meaning}</p>
        </div>
    );
}

export default Card;