import React from 'react';
import ReactAplayer from "react-aplayer"

const Music = ({audio}) => {
    const onPlay = () => {
        console.log('on play');
    };

    const onPause = () => {
        console.log('on pause');
    };

    const onInit = ap => {
        console.log("init")
        // ap = ap;
    };

    return (
        <>
            <ReactAplayer
                audio={audio}
                onInit={onInit}
                onPlay={onPlay}
                onPause={onPause}
            />
        </>
    )
}

export default Music
