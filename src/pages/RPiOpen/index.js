import React from "react";
import Reveal from "reveal.js";

// import 'reveal.js/dist/reveal.css';
// import 'reveal.js/dist/theme/white.css';

import {FirstHeader, MainSlide, SecondHeader, ThirdHeader} from "../../component/ppt/PPTComponents";
import './index.scss';
import "../../assets/styles/PPTGeneral.scss"

import {Table} from "@douyinfe/semi-ui";

const RPiOpen = () => {
  React.useEffect(() => {
    let deck = new Reveal({
      backgroundTransition: 'zoom',
      transition: 'slide',
      autoPlayMedia: true,
      transitionSpeed: 'fast',
      margin: 0,
    })
    deck.initialize();
  },[]);

  const author_info = [
    {key: '1', stuid: "200855528", name: " Zhou Hang (周航)"},
    {key: '2', stuid: "200855521", name: " Xiao Xiang (肖湘)"},
    {key: '3', stuid: "200855501", name: " Chen Dongjin (陈东进)"},
    {key: '4', stuid: "185080504", name: " Dong Jiangnan (董江南)"},
    {key: '5', stuid: "200855406", name: " Gu Xiaowen (顾晓雯)"}
  ]

  const timeline_table_column = [
    {title: 'Time Node', dataIndex: 'time_id'},
    {title: 'Tasks', dataIndex: 'tasks'}
  ]

  const timeline_table_data = [
    {
      time_id: '4-21 ~ 4-27',
      tasks: 'Technology selection',
    },
    {
      time_id: '4-28',
      tasks: 'Opening Proposal',
    },
    {
      time_id: '4-29 ~ 5-5',
      tasks: 'Software Development',
    },
    {
      time_id: '5-5 ~ 5-10',
      tasks: 'Hardware Development',
    },
    {
      time_id: '5-10 ~ 5-15',
      tasks: 'Joint Debugging and Test',
    },
    {
      time_id: '5-15 ~ 5-20',
      tasks: 'Document writing',
    },
    {
      time_id: '5-26',
      tasks: 'Defense',
    },
  ]

  return (
    <div className="reveal">
      <div className="slides zslides" data-transition="slide">
        <section>
          {/*1-1 : 作者信息，主页 */}
          <MainSlide
            title="Opening Proposal"
            authors={author_info}
          />

          {/* 1-2 综述概览 */}
          <section className="detail-slide">
            <SecondHeader text="Overview"/>
            <ThirdHeader text="Project Objective"/>
            <ThirdHeader text="Methods"/>
            <ul className="ui_content">
              <li className="li_content">Hardware Design</li>
              <li className="li_content">Core Technology</li>
              <li className="li_content">Internet of Things</li>

            </ul>
            <ThirdHeader text="Timeline"/>
            <ThirdHeader text="Risk and Countermeasure"/>
          </section>
        </section>

        <section>
          {/*2-1 : 目标*/}
          <section>
            <FirstHeader text="Project Objective" />
          </section>

          {/*2-2 : 最终目标*/}
          <section>
            <SecondHeader text="Objective"/>
            <ThirdHeader text="Make an Electronic Keyboard"/>
            <ThirdHeader text="Based on Raspberry Pi"/>
            {/*<ThirdHeader text="Sounds EASY?"/>*/}
            <img
              className="fragment"
              src="/resources/img/rpi/framework.webp"
              alt="Function Framework"
              style={{width: '850px'}}/>
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
              <li className="li_content">Keyboard -- 4×4 Button Matrix</li>
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
            <ThirdHeader text="Generate real-time waveform"/>
            <div className="video-group">
              <video className="video-frame" src="/resources/img/rpi/gs_110.mp4" data-autoplay loop="loop"/>
              <video className="video-frame" src="/resources/img/rpi/gs_220.mp4" data-autoplay loop="loop"/>
              <video className="video-frame" src="/resources/img/rpi/gs_440.mp4" data-autoplay loop="loop"/>
              <video className="video-frame" src="/resources/img/rpi/gs_880.mp4" data-autoplay loop="loop"/>
            </div>
          </section>

          <section>
            <SecondHeader text="Internet of Things"/>
            <ThirdHeader text="We also want to connect it to the Internet!"/>
            <ul className="ui_content">
              <li className="li_content">Record your works and upload them to the cloud and acquire them with a web browser.</li>
              <li className="li_content">Back-end Development -- Node.js</li>
              <li className="li_content">Front-end Development -- React.js</li>
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

          <section>
            <FirstHeader text="End."/>
          </section>
        </section>
      </div>
    </div>
  )
}

export default RPiOpen
