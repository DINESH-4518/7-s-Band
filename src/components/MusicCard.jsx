import { useState } from 'react';
import React, { useRef } from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function MusicCard(props){

    
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
          props.onPlay(props.id, audioRef);
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      };


    return(
        <div className="musicCard">
            <div className="musictop">
                <button onClick={handlePlayPause} className="playButton">
                    <MusicNoteIcon fontSize="large" />
                </button>
            </div>
            <div className="musicbottom">
                <p>
                    {props.music}  <br />{props.artist}
                </p>
                <audio ref={audioRef} src={props.sound} />
            </div>
        </div>
    );
}

export default MusicCard;