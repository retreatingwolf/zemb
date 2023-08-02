import {Button} from "@douyinfe/semi-ui";
import {IconPause, IconPlay, IconStop} from "@douyinfe/semi-icons";
import "./index.scss"

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
            <p className="zplayer-name">Current: {audio[0].name}</p>
            <div className="zplayer-buttons">
                <Button icon={<IconPlay size="extra-large"/>} onClick={playSound}/>
                <Button icon={<IconPause size="extra-large"/>} onClick={pauseSound}/>
                <Button icon={<IconStop size="extra-large"/>} onClick={stopSound}/>
            </div>
        </div>
    )
}

export default ZAplayer