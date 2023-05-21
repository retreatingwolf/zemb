import React, {useEffect, useState} from 'react'
import {Button, Table} from "@douyinfe/semi-ui";
import {IconDelete, IconReply} from "@douyinfe/semi-icons";
import ZAplayer from "./ZAplayer";
import "./RPi.css"
import { Typography } from '@douyinfe/semi-ui';
import audioService from "./services/audioService";

const RPi = () => {
    const [audioList, setAudioList] = useState([])
    const [audio, setAudio] = useState([{
        url: ''
    }])

    useEffect(() => {
        audioService.getAll()
            .then(response => {
                // console.log(typeof (response.data))
                // console.log(response.data)
                setAudioList(response.data)
            })
    }, [])

    const choose_one_audio = (record) => {
        // 选择一个音频在下面播放
        // console.log(record.name)
        // console.log(record.url)
        const new_audio = {
            name: record.name,
            artist: 'Yourself',
            url: record.url
        }
        setAudio([].concat(new_audio))
    }

    const delete_one_audio = (record) => {
        // 从服务器删除一个音频
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
                <Button icon={<IconReply size="extra-large"/>} theme="borderless" onClick={() => choose_one_audio(record)} />
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            render: (text, record) => (
                <Button icon={<IconDelete size="extra-large"/>} theme="borderless" onClick={() => delete_one_audio(record)} />
            )
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
