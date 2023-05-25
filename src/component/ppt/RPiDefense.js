import React from "react";
import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css';
import {FirstHeader, MainSlide, SecondHeader, ThirdHeader} from "./PPTComponents";
import {Table} from "@douyinfe/semi-ui";
import "./RPiDefense.css"

const RPiDefense = () => {
    React.useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'zoom',
            transition: 'slide',
            transitionSpeed: 'fast',
            margin: 0,
        })
        deck.initialize();
    },[])

    const midi_note_column = [
        {
            title: "Midi Note",
            dataIndex: "midi_note"
        },
        {
            title: "Note Name",
            dataIndex: "note_name"
        },
        {
            title: "Frequency",
            dataIndex: "frequency"
        }
    ]

    const midi_note_data = [
        {
            midi_note: "45",
            note_name: "A2",
            frequency: "110"
        },
        {
            midi_note: "46",
            note_name: "A#2/Bb2",
            frequency: "116.54"
        },
        {
            midi_note: "...",
            note_name: "...",
            frequency: "..."
        },
        {
            midi_note: "80",
            note_name: "G#5/Ab5",
            frequency: "830.61"
        },
        {
            midi_note: "81",
            note_name: "A5",
            frequency: "880"
        },
    ]

    const midi_event_column = [
        {
            title: "ID",
            dataIndex: "id"
        },
        {
            title: "Function Code",
            dataIndex: "function_code"
        },
        {
            title: "Param1",
            dataIndex: "param1"
        },
        {
            title: "Param2",
            dataIndex: "param2"
        },
        {
            title: "Param3",
            dataIndex: "param3"
        },
        {
            title: "Function",
            dataIndex: "function"
        }
    ]

    const midi_event_data = [
        {
            id: 1,
            function_code: 144,
            param1: "Midi Note",
            param2: "Volume",
            param3: "0",
            function: "Note On"
        },
        {
            id: 2,
            function_code: 128,
            param1: "Midi Note",
            param2: "0",
            param3: "0",
            function: "Note Off"
        },
        {
            id: 3,
            function_code: 176,
            param1: "1",
            param2: "On/Off",
            param3: "0",
            function: "Mod"
        },
        {
            id: 4,
            function_code: 192,
            param1: "Control Code",
            param2: "0",
            param3: "0",
            function: "Control Mod"
        },
    ]

    const repository_column = [
        {
            title: "Repository",
            dataIndex: "repository",
            render: (text, record, index) => {
                return (
                    <a href={text} target="_blank" rel="noreferrer">{text}</a>
                )
            }
        },
        {
            title: "Function",
            dataIndex: "function"
        }
    ]

    const repository_data = [
        {
            repository: "https://gitee.com/zhouzhoukang/zsound",
            function: "CadoHero, the audio synthesizer."
        },
        {
            repository: "https://gitee.com/mumu2002/pil-simple-graphics",
            function: "For UI Design. Contains some ui icons."
        },
        {
            repository: "https://gitee.com/zhouzhoukang/zemb",
            function: "Frontend that has been deployed."
        },
        {
            repository: "https://gitee.com/gu-xiaowen-123/ggxw",
            function: "Pure frontend code."
        },
        {
            repository: "https://gitee.com/chenshoufeng/mp3_wav",
            function: "Code for audio formats transform."
        }
    ]

    const labour_division_column = [
        {
            title: "Name",
            dataIndex: "name",
            width: 220,
            render: (text, record, index) => {
                return (
                    <a href={record.homepage} target="_blank" rel="noreferrer">{text}</a>
                )
            }
        },
        {
            title: "Workload",
            dataIndex: "workload"
        }
    ]

    const labour_division_data = [
        {
            name: "Zhou Hang",
            workload: "Propose project objectives, Synthesizer design, System Architecture",
            homepage: "https://gitee.com/zhouzhoukang"
        },
        {
            name: "Xiao Xiang ",
            workload: "UI Design, Document polishing",
            homepage: "https://gitee.com/mumu2002"
        },
        {
            name: "Chen Dongjin",
            workload: "Circuit Design, Video Editing",
            homepage: "https://gitee.com/chenshoufeng"
        },
        {
            name: "Dong Jiangnan",
            workload: "Web Back-end Design",
            homepage: "https://gitee.com/djn948998154"
        },
        {
            name: "Gu Xiaowen",
            workload: "Web Front-end Design",
            homepage: "https://gitee.com/gu-xiaowen-123"
        },
    ]

    const author_info = [
        {key: '1', stuid: "200855528", name: " Zhou Hang (周航)"},
        {key: '2', stuid: "200855521", name: " Xiao Xiang (肖湘)"},
        {key: '3', stuid: "200855501", name: " Chen Dongjin (陈东进)"},
        {key: '4', stuid: "185080504", name: " Dong Jiangnan (董江南)"},
        {key: '5', stuid: "200855406", name: " Gu Xiaowen (顾晓雯)"}
    ]

    return (
        <div className="reveal">
            <div className="slides zslides" data-transition="slide">
                <section>
                    {/*1-1 : 作者信息，主页 */}
                    <MainSlide
                        title="Custom Electronic Keyboard"
                        authors={author_info}
                    />
                    {/* 1-2 综述概览 */}
                    <section className="detail-slide">
                        <SecondHeader text="Content"/>

                        <ThirdHeader text="1. Introduction - WHY"/>
                        <ThirdHeader text="2. Functional View - WHAT"/>
                        <ThirdHeader text="3. Technical View - HOW"/>

                        <ul className="ui_content">
                            <li className="li_content">Midi Protocol</li>
                            <li className="li_content">Synthesizer Design</li>
                            <li className="li_content">Midi Keyboard Driver</li>
                            <li className="li_content">Timbre Implementation</li>
                            <li className="li_content">Waveform Visualization</li>
                            <li className="li_content">Web</li>
                        </ul>

                        <ThirdHeader text="4. Conclusion"/>
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="1.Introduction - WHY" />
                    </section>
                    <section>
                        <SecondHeader text="Others Framework"/>
                        <img src="/resources/img/rpiDefense/OthersFramework.png" width="600" alt="Others Framework"/>
                    </section>
                    <section>
                        <SecondHeader text="Our Framework"/>
                        <img src="/resources/img/rpiDefense/ours_framework.png" width="800" alt="Our Framework"/>
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="2.Functional View - WHAT" />
                    </section>
                    <section>
                        <SecondHeader text="Circuit Connection"/>
                        <img
                            src="/resources/img/rpiDefense/circuit.png"
                            style={{width: "700px"}}
                            alt="Circuit Connection"/>
                    </section>
                    <section>
                        <SecondHeader text="GPIO Detail"/>
                        <img
                            src="/resources/img/rpiDefense/gpio.svg"
                            style={{width: "900px"}}
                            alt="GPIO detail"/>
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="3.Technical View - HOW" />
                    </section>
                    <section>
                        <SecondHeader text="Midi Protocol"/>
                        <ThirdHeader text="Midi Note"/>
                        <Table
                            className="table-common midi-note-table"
                            columns={midi_note_column}
                            dataSource={midi_note_data}
                            pagination={false}
                            />
                        <br/>
                        <ThirdHeader text="And we need to implement 48~108(C3~C8) notes"/>
                    </section>
                    <section>
                        <SecondHeader text="Midi Protocol"/>
                        <ThirdHeader text="Midi Events"/>
                        <Table
                            className="table-common"
                            columns={midi_event_column}
                            dataSource={midi_event_data}
                            pagination={false}
                            />
                        <img
                            className="fragment"
                            src="/resources/img/rpiDefense/easykey.jpg"
                            alt="easykey"
                            style={{width: "500px"}}
                        />
                    </section>

                    <section>
                        <SecondHeader text="Synthesizer"/>
                        <img
                            src="/resources/img/rpiDefense/SynthFlow.png"
                            style={{width: "700px"}}
                            alt="Synthesizer"/>
                    </section>
                    <section>
                        <SecondHeader text="Chord"/>
                        <ThirdHeader text="How to detect simultaneous key presses?"/>
                        <img
                            className="fragment"
                            src="/resources/img/rpiDefense/ChordFramework.png"
                            style={{width: "950px"}}
                            alt="Chord"
                        />
                    </section>
                    <section>
                        <SecondHeader text="Timbres"/>
                        <img
                            src="/resources/img/rpiDefense/TimbreRealization.png"
                            style={{width: "800px", marginTop:"-15px", marginBottom:"0px"}}
                            alt="Timbres"
                        />
                        <img
                            className="fragment"
                            src="/resources/img/rpiDefense/ClassInheritance.png"
                            style={{width: "800px", marginTop:"-0px"}}
                            alt="ClassInheritance"
                        />
                    </section>
                    <section>
                        <SecondHeader text="Karplus-Strong"/>
                        <img
                            src="/resources/img/rpiDefense/KarplusStrong.png"
                            style={{width: "800px"}}
                            alt="Karplus Strong"
                        />
                        <ThirdHeader text="Simple but Effective"/>
                    </section>
                    <section>
                        <SecondHeader text="Wave Visualization"/>
                        <img
                            src="/resources/img/rpiDefense/WaveVisualization.png"
                            style={{width: "900px"}}
                            alt="Wave Visualization"/>
                    </section>
                    <section>
                        <SecondHeader text="UI Design"/>
                        <img
                            src="/resources/img/rpiDefense/UIDesign.png"
                            style={{width: "600px"}}
                            alt="UI Design"/>
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="4.Conclusion" />
                    </section>
                    <section>
                        <SecondHeader text="Repositories"/>
                        <Table
                            className="table-common repository-table"
                            columns={repository_column}
                            dataSource={repository_data}
                            pagination={false}/>
                    </section>
                    <section>
                        <SecondHeader text="Obstacles"/>
                        <ul className="ui_content">
                            <li className="li_content">Time-critical features of audio application.</li>
                            <li className="li_content">The program works well on Windows but <span className="fail-strong">FAILED</span> on Raspberry Pi.</li>
                            <li className="li_content">Maintaining the code for both platforms almost drives me crazy.</li>
                            <li className="li_content">Without any industrial design.</li>
                            <li className="li_content">Incomprehensible concurrency bugs</li>
                            <li className="li_content">Architecting a complex system.</li>
                        </ul>
                    </section>
                    <section>
                        <SecondHeader text="Labour Division"/>
                        <Table
                            className="table-common labour-division-table"
                            columns={labour_division_column}
                            dataSource={labour_division_data}
                            pagination={false}/>
                    </section>
                    <section>
                        <FirstHeader text="End." />
                    </section>
                </section>
            </div>
        </div>
    )
}

export default RPiDefense
