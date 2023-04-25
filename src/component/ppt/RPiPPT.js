import {FirstHeader, MainSlide, SecondHeader, ThirdHeader} from "./PPTComponents";
import React from "react";
import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import './RPiPPT.css'
import {Table} from "@douyinfe/semi-ui";

const RPiPPT = () => {
    React.useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'zoom',
            transition: 'slide'
        })
        deck.initialize();
        console.log('初始化网工ppt')
    },[])

    const author_info = [
        {key: '1', stuid: "200855528", name: " H.Zhou   "},
        {key: '2', stuid: "200855521", name: " Catherine"},
        {key: '3', stuid: "200855501", name: " D.J.Chen "},
        {key: '4', stuid: "185080504", name: " J.N.Dong "},
        {key: '5', stuid: "200855406", name: " X.W.Gu   "},
    ]

    const timeline_table_column = [
        {title: '时间', dataIndex: 'time_id'},
        {title: '任务', dataIndex: 'tasks'}
    ]

    const timeline_table_data = [
        {
            time_id: '4-21 ~ 4-27',
            tasks: 'Technology selection',
        },
        {
            time_id: '4-28',
            tasks: 'Opening Report',
        },
        {
            time_id: '4-29 ~ 5-1',
            tasks: 'Software Development',
        },
        {
            time_id: '5-1 ~ 5-5',
            tasks: 'Hardware Development',
        },
    ]

    return (
        <div className="reveal">
            <div className="slides" data-transition="slide">
                <section>
                    {/*1-1 : 作者信息，主页 */}
                    <MainSlide
                        title="Opening Report"
                        authors={author_info}
                    />

                    {/* 1-2 综述概览 */}
                    <section className="detail-slide">
                        <SecondHeader text="Overview"/>
                        <ThirdHeader text="Target"/>
                        <ThirdHeader text="Methods"/>
                        <ThirdHeader text="Timeline"/>
                        <ThirdHeader text="Risk and Countermeasure"/>
                    </section>
                </section>

                <section>
                    {/*2-1 : 目标*/}
                    <section>
                        <FirstHeader text="Target" />
                    </section>

                    {/*2-2 : 最终目标*/}
                    <section>
                        <SecondHeader text="Target"/>
                        <ThirdHeader text="Make an Electronic Keyboard"/>
                        <ThirdHeader text="With a Raspberry Pi"/>
                        <ThirdHeader text="Sounds EASY?"/>
                    </section>
                </section>

                <section>
                    {/*3-1 : 方法*/}
                    <section>
                        <FirstHeader text="Methods"/>
                    </section>

                    <section>
                        <SecondHeader text="Hardware"/>
                        <ThirdHeader text="Overview Graph"/>
                        <ul className="ui_content">
                            <li className="li_content">Keyboard -- 4×4 Matrix Button</li>
                            <li className="li_content">Sound Output -- Sound</li>
                            <li className="li_content">Voice Input -- USB Microphone</li>
                            <li className="li_content">Visualization -- 0.96 OLED</li>
                            <li className="li_content">Mode Switch -- Touch Screen or Buttons</li>
                        </ul>
                    </section>

                    <section>
                        <SecondHeader text="Why it's difficult?"/>
                        <ThirdHeader text="Example - Guitar"/>
                        <ul className="ui_content">
                            <li className="li_content">Each time the string is plucked, it sounds a little bit different</li>
                            <li className="li_content">Depends on the status of the string</li>
                            <li className="li_content"><strong>We want to simulate it!</strong></li>
                        </ul>
                        <ThirdHeader text="HOW?"/>
                        <ul className="ui_content">
                            <li className="li_content"><strong>One FAILED try: </strong>Push a button, and play an existing .wav file</li>
                        </ul>
                    </section>

                    <section>
                        <SecondHeader text="How?"/>
                        <ThirdHeader text="Genarate realtime-waveform"/>
                        <div className="video-group">
                            <video className="video-frame" src="/resources/rpi/gs_110.mp4" muted autoPlay loop="loop"/>
                            <video className="video-frame" src="/resources/rpi/gs_220.mp4" muted autoPlay loop="loop"/>
                            <video className="video-frame" src="/resources/rpi/gs_440.mp4" muted autoPlay loop="loop"/>
                            <video className="video-frame" src="/resources/rpi/gs_880.mp4" muted autoPlay loop="loop"/>
                        </div>
                    </section>

                    <section>
                        <SecondHeader text="Internet of Things"/>
                        <ThirdHeader text="We also want to connect it to Internet!"/>
                        <ul className="ui_content">
                            <li className="li_content">Record your works and upload them to the cloud and acquire them with a web browser.</li>
                            <li className="li_content">Back-end Development -- Maybe Node.js</li>
                            <li className="li_content">Front-end Development -- Maybe React</li>
                        </ul>
                    </section>
                </section>

                <section>
                    {/*4-1 : 时间线*/}
                    <section>
                        <FirstHeader text="Timeline" />

                    </section>

                    <section>
                        <SecondHeader text="Timeline Table"/>
                        <br/>
                        <Table
                            className="timeline-table"
                            columns={timeline_table_column}
                            dataSource={timeline_table_data}
                            pagination={false}
                        />
                    </section>
                </section>

                <section>
                    {/*5-1 : 风险和对策*/}
                    <section>
                        <FirstHeader text="Risk and Countermeasure" />
                    </section>

                    <section>
                        <SecondHeader text="Risk and Countermeasure"/>
                        <ThirdHeader text="Delay"/>
                        <ul className="ui_content">
                            <li className="li_content">Software Delay may be unbearable</li>
                            <li className="li_content">Optimize Speed</li>
                        </ul>
                        <ThirdHeader text="Chord"/>
                        <ul className="ui_content">
                            <li className="li_content">Pluck several string at a time may be difficult to realize</li>
                            <li className="li_content">Optimize Software</li>
                        </ul>
                        <ThirdHeader text="Visualization"/>
                        <ul className="ui_content">
                            <li className="li_content">There is no end to beautifying the interface</li>
                            <li className="li_content">Debug ∞ times</li>
                        </ul>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default RPiPPT
