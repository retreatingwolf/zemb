import {Button} from "@douyinfe/semi-ui";
import {IconPause, IconPlay, IconStop} from "@douyinfe/semi-icons";

const ZAplayer = ({audio}) => {
    const audioTune = new Audio(audio[0].url);
    // console.log(audio[0])

    const playSound = () => {
        audioTune.play();
    }

    const pauseSound = () => {
        audioTune.pause();
    }

    const stopSound = () => {
        audioTune.pause();
        audioTune.currentTime = 0;
    }

    return (
        <div className="zplayer-container">
            <Button icon={<IconPlay/>} onClick={playSound}/>
            <Button icon={<IconPause/>} onClick={pauseSound}/>
            <Button icon={<IconStop/>} onClick={stopSound}/>
        </div>
    )
}

export default ZAplayer