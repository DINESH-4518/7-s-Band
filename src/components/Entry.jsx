import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Entry(props) {
    return(
        <div className="entry">
            <div className="top">
                <h2>{props.name}</h2>
                <Avatar img = {props.img}/>
            </div>
            <div className="bottom">
                <Details detailInfo = {props.des}/>
            </div>
        </div>
    );
}

export default Entry;