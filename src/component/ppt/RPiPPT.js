import {FirstHeader, MainSlide, SecondHeader} from "./PPTComponents";
import React from "react";
import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

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
        {key: '1', stuid: "200855528", name: "周航"},
        {key: '2', stuid: "200855521", name: "肖湘"},
        {key: '3', stuid: "200855501", name: "陈东进"},
        {key: '4', stuid: "185080504", name: "董江南"},
        {key: '5', stuid: "200855406", name: "顾晓雯"},
    ]

    // TODO！！
    return (
        <>
            <div className="reveal">
                <div className="slides" data-transition="slide">
                    <section>
                        {/*1-1 : 作者信息，主页 */}
                        <MainSlide
                            title="嵌入式开发开题报告"
                            authors={author_info}
                        />

                        {/* 1-2 综述概览 */}
                        <section className="detail-slide">
                            <SecondHeader text="Overview"/>

                        </section>
                    </section>

                    <section>
                        {/*2-1 : */}
                        <section>
                            <FirstHeader text="开题报告" />

                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}

export default RPiPPT
