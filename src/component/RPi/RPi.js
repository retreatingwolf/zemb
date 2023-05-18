import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, Table} from "@douyinfe/semi-ui";
import {IconPlay} from "@douyinfe/semi-icons";
import ZAplayer from "./ZAplayer";
import "./RPi.css"

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
            title: 'Play',
            dataIndex: 'play',
            render: (text, record) => (
                <Button icon={<IconPlay/>} theme="borderless" onClick={() => click_play(record)} />
            ),
        }
    ];

    // console.log(audio)
    return (
        <>
            <h1>Your Personal Library</h1>
            {/*显示音乐列表*/}
            <Table columns={columns} dataSource={audioList} pagination={false} />
            {/*播放音乐*/}
            <ZAplayer audio={audio}/>
        </>
    )
}

export default RPi
