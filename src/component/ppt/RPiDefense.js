import React from "react";
import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css';
import {FirstHeader, MainSlide, SecondHeader, ThirdHeader} from "./PPTComponents";


const RPiDefense = () => {
    React.useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'zoom',
            transition: 'slide',
            transitionSpeed: 'fast',
            // autoPlayMedia: true,
            margin: 0,
        })
        deck.initialize();
    },[])

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
                            <li className="li_content">Midi Keyboard Driver</li>
                            <li className="li_content">Synthesizer Design</li>
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
                </section>

                <section>
                    <section>
                        <FirstHeader text="2.Functional View - WHAT" />
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="3.Technical View - HOW" />
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="4.Conclusion" />
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
