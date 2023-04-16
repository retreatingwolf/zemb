import React from "react";
import Reveal from 'reveal.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import "./Network.css"
import { Table } from '@douyinfe/semi-ui';

const Network = () => {
    React.useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'slide',
            transition: 'slide'
        })
        deck.initialize();
        console.log('initialized Network Presentation')
    },[])

    const result_table_column = [
        {title: '名称', dataIndex: 'name'},
        {title: 'PC0', dataIndex: 'pc0' },
        {title: 'PC1', dataIndex: 'pc1' },
        {title: 'PC2', dataIndex: 'pc2' },
        {title: 'PC3', dataIndex: 'pc3' },
    ]
    const result_table_data = [
        {
            key:'0',
            name: 'PC0',
            pc0: '✓',
            pc1: '✓',
            pc2: ' ',
            pc3: ' ',
        },
        {
            key:'1',
            name: 'PC1',
            pc0: '✓',
            pc1: '✓',
            pc2: ' ',
            pc3: ' ',
        },
        {
            key:'2',
            name: 'PC2',
            pc0: ' ',
            pc1: ' ',
            pc2: '✓',
            pc3: '✓',
        },
        {
            key:'3',
            name: 'PC3',
            pc0: ' ',
            pc1: ' ',
            pc2: '✓',
            pc3: '✓',
        },
    ]

    return (
        <div className="reveal">
            <div className="slides" data-transition="slide">
                <section>
                    {/*1-1 : 作者信息，主页 */}
                    <section className="ppt-main-layout">
                        <p className="first_header">网络工程实习报告</p><br/>
                        <div className="author-info">
                            <a href="https://gitee.com/zhouzhoukang">200855528 周航</a><br/>
                            200865104程有为<br/>
                            200855507花宇杰<br/>
                        </div>
                        <div className="logo-div">
                            <div className="logo">
                                <a href="https://www.njfu.edu.cn/">
                                    <p className="logo-name">南京林业大学</p>
                                    <img className="logo-img" src="/resources/img/network/main_icon.jpg" alt="南京林业大学"/>
                                </a>
                            </div>

                            <div className="logo">
                                <a href="https://it.njfu.edu.cn/">
                                    <p className="logo-name">信息科学技术学院</p>
                                    <img className="logo-img" src="/resources/img/network/cs_logo.jpg" alt="信息科学技术学院"/>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 1-2 综述概览 */}
                    <section>
                        <p className="second_header">Overview</p>

                        <p className="third_header">VLAN网络配置</p>
                        <ul className="ui_content">
                            <li className="li_content"><strong>Q1:</strong>我们是如何配置的</li>
                            <li className="li_content"><strong>Q2:</strong>配置的成果如何展示的</li>
                        </ul>

                        <p className="third_header">ZMail邮件系统</p>
                        <ul className="ui_content">
                            <li className="li_content"><strong>Q1:</strong> 系统需求分析</li>
                            <li className="li_content"><strong>Q2:</strong> 客户端软件设计</li>
                            <li className="li_content"><strong>Q3:</strong> 服务端软件设计</li>
                        </ul>
                        <p className="third_header">总结</p>
                    </section>
                </section>

                {/*网络配置章节*/}
                <section>
                    {/* 2-1 : 标题 */}
                    <section>
                        <p className="first_header">VLAN网络配置</p>
                    </section>

                    {/*2-2 : 拓扑结构*/}
                    <section>
                        <p className="second_header">拓扑结构</p>
                        <img src="/resources/img/network/拓扑图.png" alt="拓扑图"/>
                        <ul className="ui_content">
                            <li>PC0，PC1，PC2在同一个网段，PC3在另一个网段</li>
                            <li>计划将PC0，PC1划入VLAN2；将PC2，PC3划入VLAN3</li>
                            <li>此时若什么都不配置，只有相同网段内PC能互相ping通</li>
                        </ul>
                    </section>

                    {/*2-3 : 配置结果展示 */}
                    <section>
                        <p className="second_header">配置结果</p>
                        <Table
                            className="result_table"
                            columns={result_table_column}
                            dataSource={result_table_data}
                            pagination={false}
                        />
                        <img src="/resources/img/network/p0-2.png" alt="p0-2"/>
                    </section>

                {/*    <section>*/}
                {/*        <p className="second_header">配置总结</p>*/}
                {/*        <p className="third_header">*/}
                {/*            <a href="https://www.netacad.com/zh-hans/courses/packet-tracer">模拟器使用：Cisco Packet*/}
                {/*                Tracer</a>*/}
                {/*        </p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">Cisco Systems推出的一款用于网络技术教学和培训的软件</li>*/}
                {/*            <li className="li_content">可以模拟各种网络设备和协议，学习网络基础知识、设计和排错技能。</li>*/}
                {/*        </ul>*/}
                {/*        <p className="third_header">使用VLAN的目的</p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">不同VLAN之间不可以直接通信，杜绝广播信息的不安全性</li>*/}
                {/*            <li className="li_content">从逻辑上划分网络，更加灵活，便于管理</li>*/}
                {/*            <li className="li_content">提高网络健壮性，故障被限制在某个VLAN中不会影响其他网络</li>*/}
                {/*        </ul>*/}
                {/*    </section>*/}
                </section>

                {/*网络编程 */}
                {/*<section>*/}
                {/*    <section>*/}
                {/*        <br/><br/><br/><br/><br/><p className="first_header">ZMail邮件系统</p>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <p className="second_header">需求分析</p>*/}
                {/*        <p className="third_header">功能设计</p>*/}
                {/*        <img src="/resources/img/network/gui_design.png" alt="界面设计" className="r-stretch"/>*/}
                {/*            <ul className="ui_content">*/}
                {/*                <li className="li_content">邮件服务器使用例如腾讯和网易的邮箱服务</li>*/}
                {/*                <li className="li_content">通过SMTP/POP3协议收发删邮件及其附件</li>*/}
                {/*                <li className="li_content">富文本编辑器</li>*/}
                {/*                <li className="li_content">草稿云存储功能</li>*/}
                {/*            </ul>*/}
                {/*    </section>*/}

                {/*    <section>*/}
                {/*        <p className="second_header">技术栈</p>*/}
                {/*        <p className="third_header">PyQt5.12</p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">使用Python便捷的进行QT风格的GUI开发</li>*/}
                {/*        </ul>*/}

                {/*        <p className="third_header">SQLite</p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">一个自给自足，零配置的SQL数据库引擎</li>*/}
                {/*            <li className="li_content">Python库sqlite3</li>*/}
                {/*        </ul>*/}

                {/*        <p className="third_header">Socket</p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">纯socket开发</li>*/}
                {/*        </ul>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <p className="second_header">客户端软件设计</p>*/}
                {/*        <img src="/resources/img/network/client_thread.png" alt="客户端线程" height="250"/>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">多线程设计：避免GUI界面卡死</li>*/}
                {/*            <li className="li_content">邮箱服务器：邮件收，发，删，附件收发</li>*/}
                {/*            <li className="li_content">自己服务器：草稿获取，保存，删除</li>*/}
                {/*        </ul>*/}
                {/*    </section>*/}

                {/*    <section>*/}
                {/*        <p className="second_header">服务器软件设计</p>*/}
                {/*        <p className="third_header">简易调试器 (基础设施)</p>*/}
                {/*        <img src="/resources/img/network/debugger.png" alt="调试器" height="250"/>*/}
                {/*            <ul className="ui_content">*/}
                {/*                <li className="li_content">在服务器接收线程之前套一个调试器，通过调试器控制服务器软件</li>*/}
                {/*                <li className="li_content">通过指令查看当前服务器进程的状态</li>*/}
                {/*                <li className="li_content">为调试带来巨大方便</li>*/}
                {/*            </ul>*/}
                {/*    </section>*/}

                {/*    <section>*/}
                {/*        <p className="second_header">服务器软件设计</p>*/}
                {/*        <p className="third_header">服务端线程设计</p>*/}
                {/*        <img src="/resources/img/network/server_thread.png" alt="服务端线程" height="400"/>*/}
                {/*    </section>*/}

                {/*    <section>*/}
                {/*        <p className="second_header">数据传输协议设计</p>*/}
                {/*        <p className="third_header">数据包格式</p>*/}
                {/*        <img src="/resources/img/network/protocol.png" alt="协议" height="250"/>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">发送之前先计算指令的长度，将该长度信息放在数据包之前</li>*/}
                {/*            <li className="li_content">指令采用json序列化字典发送的形式</li>*/}
                {/*            <li className="li_content">扩展性强，适用于传输图片等数据量较大的文件</li>*/}
                {/*        </ul>*/}
                {/*    </section>*/}

                {/*    <section>*/}
                {/*        <p className="second_header">数据库设计</p>*/}
                {/*        <p className="third_header">E-R图</p>*/}
                {/*        <img src="/resources/img/network/er.png" alt="E-R图" height="300"/>*/}
                {/*            <ul className="ui_content">*/}
                {/*                <li className="li_content">目前的需求只有邮件草稿云端存储</li>*/}
                {/*                <li className="li_content">只涉及一个一对多的关系</li>*/}
                {/*                <li className="li_content">很容易进行扩展</li>*/}
                {/*            </ul>*/}
                {/*    </section>*/}

                {/*    <section>*/}
                {/*        <br/><br/><br/><br/><br/><p className="first_header">实际演示</p>*/}
                {/*    </section>*/}
                {/*</section>*/}

                {/*总结*/}
                {/*<section>*/}
                {/*    <section>*/}
                {/*        <br/><br/><br/><br/><br/><p className="first_header">总结</p>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <p className="second_header">不足和目标</p>*/}
                {/*        <p className="third_header">客户端</p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">GUI界面的美化和易用性优化永远没有尽头</li>*/}
                {/*            <li className="li_content">收到的邮件全部存储在内存中，软件占用内存较大</li>*/}
                {/*            <li className="li_content">全部接收完之后才会将邮件显示在界面上，考虑一边接收一边显示</li>*/}
                {/*        </ul>*/}
                {/*        <p className="third_header">服务端</p>*/}
                {/*        <ul className="ui_content">*/}
                {/*            <li className="li_content">服务端多个线程有时会同时产生调试信息，全都打印在stdout上<br/>丑得很*/}
                {/*            </li>*/}
                {/*            <li className="li_content">考虑使用Ncurses模仿GDB实现TUI将不同输出显示到不同界面上</li>*/}
                {/*        </ul>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <p className="second_header">小组信息</p>*/}
                {/*        <p className="third_header">班级：20550803</p>*/}
                {/*        <p className="third_header">项目选题：vlan配置、基于POP3和STMP的邮件客户端系统</p>*/}
                {/*        <p className="third_header">指导老师：徐昇、毕长伟</p><br/>*/}
                {/*        <table border="1" style="font-size: 30px; font-family: Lato;">*/}
                {/*            <tr>*/}
                {/*                <td>学号</td>*/}
                {/*                <td>姓名</td>*/}
                {/*                <td>分工</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>200855528</td>*/}
                {/*                <td>周航</td>*/}
                {/*                <td>前端逻辑实现/前后端合并<br/>联调/编写报告及PPT</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>200855507</td>*/}
                {/*                <td>花宇杰</td>*/}
                {/*                <td>VLAN配置/编写报告</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>200865104</td>*/}
                {/*                <td>程有为</td>*/}
                {/*                <td>SMTP协议实现/编写报告</td>*/}
                {/*            </tr>*/}
                {/*        </table>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <br/><br/><br/><br/><br/><p className="first_header">没了</p>*/}
                {/*    </section>*/}
                {/*</section>*/}
            </div>
        </div>
    );
}

export default Network
