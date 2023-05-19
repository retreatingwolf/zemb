import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, Table} from "@douyinfe/semi-ui";
import {IconReply} from "@douyinfe/semi-icons";
import ZAplayer from "./ZAplayer";
import "./RPi.css"
import { Typography } from '@douyinfe/semi-ui';

const RPi = () => {
    const [audioList, setAudioList] = useState([])
    const [audio, setAudio] = useState([{
        url: ''
    }])

    useEffect(() => {
        axios.get('http://localhost:3001/audios')
            .then(response => {
                // console.log(typeof (response.data))
                // console.log(response.data)
                setAudioList(response.data)
            })
    }, [])

    const click_play = (record) => {
        // console.log(record.name)
        // console.log(record.url)
        const new_audio = {
            name: record.name,
            artist: 'Yourself',
            url: record.url
        }
        setAudio([].concat(new_audio))
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Artist',
            dataIndex: 'artist',
        },
        {
            title: "Size",
            dataIndex: 'size'
        },
        {
            title: 'Choose',
            dataIndex: 'choose',
            render: (text, record) => (
                <Button icon={<IconReply size="extra-large"/>} theme="borderless" onClick={() => click_play(record)} />
            ),
        }
    ];
    // console.log(audio)

    const { Title } = Typography;
    return (
        <div className="music-player-container">
            <Title className="music-player-title">Your Personal Library</Title>
            {/*显示音乐列表*/}
            <Table className="music-player-table" columns={columns} dataSource={audioList} pagination={false} />
            {/*播放音乐*/}
            <ZAplayer audio={audio}/>
        </div>
    )
}

export default RPi
