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
                        <img src="/resources/img/rpiDefense/circuit.png" width="700" alt="Circuit Connection"/>
                    </section>
                    <section>
                        <SecondHeader text="GPIO Detail"/>
                        <img src="/resources/img/rpiDefense/gpio.svg" width="900" alt="GPIO detail"/>
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="3.Technical View - HOW" />
                    </section>
                    <section>
                        <SecondHeader text="Midi Protocol"/>
                        {/*TODO 表格*/}
                    </section>

                    <section>
                        <SecondHeader text="Synthesizer"/>
                        <img src="/resources/img/rpiDefense/SynthFlow.png" width="700" alt="Synthesizer"/>
                    </section>
                    <section>
                        <SecondHeader text="Chord"/>
                        <img src="/resources/img/rpiDefense/ChordFramework.png" width="800" alt="Chord"/>
                    </section>
                    <section>
                        <SecondHeader text="Timbres"/>
                        <img src="/resources/img/rpiDefense/TimbreRealization.png" width="800" alt="Timbres"/>
                    </section>
                    <section>
                        <SecondHeader text="Karplus-Strong"/>
                        {/*TODO Karplus-Strong算法*/}
                    </section>
                    <section>
                        <SecondHeader text="Wave Visualization"/>
                        <img src="/resources/img/rpiDefense/WaveVisualization.png" width="900" alt="Wave Visualization"/>
                    </section>
                    <section>
                        <SecondHeader text="UI Design"/>
                        <img src="/resources/img/rpiDefense/UIDesign.png" width="600" alt="UI Design"/>
                    </section>
                </section>

                <section>
                    <section>
                        <FirstHeader text="4.Conclusion" />
                    </section>
                    <section>
                        <SecondHeader text="Repositories"/>
                        {/*TODO 产生的仓库*/}
                    </section>
                    <section>
                        <SecondHeader text="Obstacles"/>
                        {/*TODO 遇到的困难*/}
                    </section>
                    <section>
                        <SecondHeader text="Labour Division"/>
                        {/*TODO 分工合作表格*/}
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
