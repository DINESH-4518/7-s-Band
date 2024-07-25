import React, { useState } from "react";
import sounds from "../Sounds";
import MusicCard from "./MusicCard";

function Music(){

    const [currentPlaying, setCurrentPlaying] = useState(null);

    const handlePlay = (id, audioRef) => {
        if (currentPlaying && currentPlaying.id !== id) {
            currentPlaying.audio.pause();
            currentPlaying.audio.currentTime = 0;
        }

        setCurrentPlaying({ id, audio: audioRef.current });

    };

    return(

        
        <nav className="music">
            <h2 className="music-h2">Tap, Play & Repeat</h2>
            <div className = "tracks">
                {sounds.map((sound) => (
                    <MusicCard
                        key={sound.id}
                        id={sound.id}
                        artist={sound.artist}
                        music={sound.music}
                        sound={sound.sound}
                        onPlay={handlePlay}
                    />
                ))
                }
            </div>
            <div className="music-end">
                <p>
                    Hope you enjoyed !!
                </p>
            </div>
        </nav>
    );
}

export default Music;