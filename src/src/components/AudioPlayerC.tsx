import React from "react";  // Importing the React library
import AudioPlayer from 'react-h5-audio-player'; // Importing the AudioPlayer component
import 'react-h5-audio-player/lib/styles.css'; // Importing the styles for AudioPlayer
import Spinner from 'react-bootstrap/Spinner'; // Importing the Spinner component from Bootstrap

function AudioPlayerC({ AudioUrl, Loading }: { AudioUrl: string, Loading: boolean }) {  // Defining a functional component named AudioPlayerC that takes two props, AudioUrl and Loading
    var url = AudioUrl;  // Declaring a variable url and setting its value to AudioUrl

    if (AudioUrl !== "") {  // Checking if AudioUrl is not an empty string
        return (  // If it is not empty, return the following JSX
            <AudioPlayer src={url} />
        )
    } else if (Loading) {  // If AudioUrl is empty, but Loading is true, return the following JSX
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "rgb(221, 88, 0)",
                }}
            >
                <Spinner animation="border" />
            </div>
        )
    } else {  // If both AudioUrl and Loading are false, return an empty JSX element
        return <></>;
    }
}

export default AudioPlayerC;  // Exporting the AudioPlayerC component to be used in other files
