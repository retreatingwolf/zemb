import React from 'react'
import {Button, Table} from '@douyinfe/semi-ui';
import {IconPlay} from "@douyinfe/semi-icons";
import "./RPi.css"
import Music from "./Music";

const RPi = () => {
    const [audio, setAudio] = React.useState([])

    const data = [
        {
            key: '1',
            name: 'twice.mp3',
            size: '2M',
            updateTime: '2023-01-12 05:13',
            url: "/resources/audio/twice.mp3"
        },
        {
            key: '2',
            name: '刘耀文.mp3',
            size: '2M',
            updateTime: '2020-01-17 05:31',
            url: "/resources/audio/刘耀文.mp3"
        }
    ];

    const click_play = (record) => {
        console.log(record.name)
        console.log(record.url)
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
            title: 'Size',
            dataIndex: 'size',
        },
        {
            title: 'Update Time',
            dataIndex: 'updateTime',
        },
        {
            title: 'Play',
            dataIndex: 'play',
            render: (text, record) => (
                <Button icon={<IconPlay/>} theme="borderless" onClick={() => click_play(record)} />
            ),
        }
    ];

    return (
        <>
            <h1>Your Personal Library</h1>
            <Table columns={columns} dataSource={data} pagination={false} />
            <Music audio={audio}/>
            <Button icon={<IconPlay/>} onClick={() => console.log(audio)}/>
        </>
    )
}

export default RPi
