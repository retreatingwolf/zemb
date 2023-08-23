import React from "react";
import Reveal from 'reveal.js';

// import 'reveal.js/dist/reveal.css';
// import 'reveal.js/dist/theme/white.css';
// import 'reveal.js/dist/theme/black.css';

import { Table } from '@douyinfe/semi-ui';
import { FirstHeader, MainSlide, SecondHeader, ThirdHeader, ThirdHeaderLink } from "../../component/ppt/PPTComponents";
import "../../assets/styles/PPTGeneral.scss"

const NEDefense = () => {
  React.useEffect(() => {
    let deck = new Reveal({
      backgroundTransition: 'zoom',
      transition: 'slide',
      transitionSpeed: 'fast',
      margin: 0,
    });
    deck.initialize();
    console.log('初始化网工ppt');
  },[]);

  // 结果表格数据
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

  // 小组分工表格数据
  const division_table_column = [
    {title: '学号', dataIndex: 'stuid'},
    {title: '姓名', dataIndex: 'name'},
    {title: '分工', dataIndex: 'division'}
  ]
  const division_table_data = [
    {
      stuid: '200855528',
      name: '周航',
      division: '前端逻辑实现/前后端合并联调/编写报告/PPT'
    },
    {
      stuid: '200855507',
      name: '花宇杰',
      division: 'VLAN配置/编写报告'
    },
    {
      stuid: '200865104',
      name: '程有为',
      division: 'SMTP协议实现/编写报告'
    }
  ]

  const author_info = [
    {key: '1', stuid: "200855528", name: "周航"},
    {key: '2', stuid: "200865104", name: "程有为"},
    {key: '3', stuid: "200855507", name: "花宇杰"},
  ]

  return (
    <div className="reveal">
      <div className="slides" data-transition="slide">
        <section>
          {/*1-1 : 作者信息，主页 */}
          <MainSlide
            title="网络工程实习报告"
            authors={author_info}
          />

          {/* 1-2 综述概览 */}
          <section className="detail-slide">
            <SecondHeader text="Overview"/>
            <ThirdHeader text="VLAN网络配置"/>

            <ul className="ui_content">
              <li className="li_content"><strong>Q1:</strong>我们是如何配置的</li>
              <li className="li_content"><strong>Q2:</strong>配置的成果如何展示的</li>
            </ul>

            <ThirdHeader text="ZMail邮件系统"/>
            <ul className="ui_content">
              <li className="li_content"><strong>Q1:</strong> 系统需求分析</li>
              <li className="li_content"><strong>Q2:</strong> 客户端软件设计</li>
              <li className="li_content"><strong>Q3:</strong> 服务端软件设计</li>
            </ul>

            <ThirdHeader text="总结"/>
          </section>
        </section>

        {/*网络配置章节*/}
        <section>
          {/* 2-1 : 标题 */}
          <section>
            <FirstHeader text="VLAN网络配置"/>
          </section>

          {/*2-2 : 拓扑结构*/}
          <section className="detail-slide">
            <SecondHeader text="拓扑结构"/>
            <img src="/resources/img/network/topology.webp" alt="拓扑图"/>
            <ul className="ui_content">
              <li>PC0，PC1，PC2在同一个网段，PC3在另一个网段</li>
              <li>计划将PC0，PC1划入VLAN2；将PC2，PC3划入VLAN3</li>
              <li>此时若什么都不配置，只有相同网段内PC能互相ping通</li>
            </ul>
          </section>

          {/*2-3 : 配置结果展示 */}
          <section className="detail-slide">
            <SecondHeader text="配置结果"/>
            <Table
              className="result_table"
              columns={result_table_column}
              dataSource={result_table_data}
              pagination={false}
            />
            <img src="/resources/img/network/p0-2.webp" alt="p0-2"/>
          </section>

          {/*2-4 : 配置总结*/}
          <section className="detail-slide">
            <SecondHeader text="配置总结"/>
            <ThirdHeaderLink text="模拟器使用: Cisco Packet Tracer"
                             href="https://www.netacad.com/zh-hans/courses/packet-tracer"/>

            <ul className="ui_content">
              <li>Cisco Systems推出的一款用于网络技术教学和培训的软件</li>
              <li>可以模拟各种网络设备和协议，学习网络基础知识、设计和排错技能。</li>
            </ul>

            <ThirdHeader text="使用VLAN目的"/>
            <ul className="ui_content">
              <li>不同VLAN之间不可以直接通信，杜绝广播信息的不安全性</li>
              <li>从逻辑上划分网络，更加灵活，便于管理</li>
              <li>提高网络健壮性，故障被限制在某个VLAN中不会影响其他网络</li>
            </ul>
          </section>
        </section>

        {/*网络编程 */}
        <section>
          {/*3-1 : 标题*/}
          <section>
            <FirstHeader text="ZMail邮件系统"/>
          </section>

          {/*3-2 : 需求分析*/}
          <section className="detail-slide">
            <SecondHeader text="需求分析"/>
            <img src="/resources/img/network/gui_design.webp" alt="界面设计" className="r-stretch"/>
            <ul className="ui_content">
              <li>邮件服务器使用例如腾讯和网易的邮箱服务</li>
              <li>通过SMTP/POP3协议收发删邮件及其附件</li>
              <li>富文本编辑器</li>
              <li>草稿云存储功能</li>
            </ul>
          </section>

          {/*3-3 : 使用到的技术栈*/}
          <section className="detail-slide">
            <SecondHeader text="技术栈"/>
            <ThirdHeader text="PyQt5.12"/>
            <ul className="ui_content">
              <li className="li_content">使用Python进行QT风格的GUI开发</li>
            </ul>

            <ThirdHeader text="SQLite"/>
            <ul className="ui_content">
              <li>一个自给自足，零配置的SQL数据库引擎</li>
              <li>Python库sqlite3</li>
            </ul>

            <ThirdHeader text="Socket"/>
            <ul className="ui_content">
              <li>纯socket开发</li>
            </ul>
          </section>

          {/*3-4 : 客户端软件设计*/}
          <section className="detail-slide">
            <SecondHeader text="客户端软件设计"/>
            <img src="/resources/img/network/client_thread.webp" alt="客户端线程" height="250"/>
            <ul className="ui_content">
              <li className="li_content">多线程设计：避免GUI界面卡死</li>
              <li className="li_content">邮箱服务器：邮件收，发，删，附件收发</li>
              <li className="li_content">自己服务器：草稿获取，保存，删除</li>
            </ul>
          </section>

          {/*3-5 : 服务器软件设计*/}
          <section className="detail-slide">
            <SecondHeader text="服务器软件设计"/>
            <ThirdHeader text="简易调试器 (基础设施)"/>
            <img src="/resources/img/network/debugger.webp" alt="调试器" height="250"/>
            <ul className="ui_content">
              <li>在服务器接收线程之前套一个调试器，通过调试器控制服务器软件</li>
              <li>通过指令查看当前服务器进程的状态</li>
              <li>为调试带来巨大方便</li>
            </ul>
          </section>

          {/*3-6 : 服务器软件设计*/}
          <section className="detail-slide">
            <SecondHeader text="服务器软件设计"/>
            <ThirdHeader text="服务端线程设计"/>
            <img src="/resources/img/network/server_thread.webp" alt="服务端线程" height="400"/>
          </section>

          {/*3-7 : 数据传输协议设计*/}
          <section className="detail-slide">
            <SecondHeader text="数据传输协议设计"/>
            <ThirdHeader text="数据包格式"/>
            <img src="/resources/img/network/protocol.webp" alt="协议" height="250"/>
            <ul className="ui_content">
              <li className="li_content">发送之前先计算指令的长度，将该长度信息放在数据包之前</li>
              <li className="li_content">指令采用json序列化字典发送的形式</li>
              <li className="li_content">扩展性强，适用于传输图片等数据量较大的文件</li>
            </ul>
          </section>

          {/*3-7 : 数据库设计*/}
          <section className="detail-slide">
            <SecondHeader text="数据库设计"/>
            <ThirdHeader text="E-R图"/>
            <img src="/resources/img/network/er.webp" alt="E-R图" height="300"/>
            <ul className="ui_content">
              <li>目前的需求只有邮件草稿云端存储</li>
              <li>只涉及一个一对多的关系</li>
              <li>很容易进行扩展</li>
            </ul>
          </section>

          {/*3-8 : 实际演示*/}
          <section>
            <FirstHeader text="实际演示"/>
          </section>
        </section>

        {/*总结*/}
        <section>
          {/*4-1 : 总结*/}
          <section>
            <FirstHeader text="总结"/>
          </section>

          {/*4-2 : 不足和目标*/}
          <section className="detail-slide">
            <SecondHeader text="不足和目标"/>
            <ThirdHeader text="客户端"/>
            <ul className="ui_content">
              <li>GUI界面的美化和易用性优化永远没有尽头</li>
              <li>收到的邮件全部存储在内存中，软件占用内存较大</li>
              <li>全部接收完之后才会将邮件显示在界面上，考虑一边接收一边显示</li>
            </ul>

            <ThirdHeader text="服务端"/>
            <ul className="ui_content">
              <li>服务端多个线程有时会同时产生调试信息，全都打印在stdout上<br/>丑得很</li>
              <li>考虑使用Ncurses模仿GDB实现TUI将不同输出显示到不同界面上</li>
            </ul>
          </section>

          {/*4-3 : 小组信息*/}
          <section className="detail-slide">
            <SecondHeader text="小组信息"/>
            <ThirdHeader text="班级：20550803"/>
            <ThirdHeader text="项目选题：vlan配置、基于POP3和STMP的邮件客户端系统"/>
            <ThirdHeader text="指导老师：徐昇、毕长伟"/><br/>

            <Table
              className="division_table"
              columns={division_table_column}
              dataSource={division_table_data}
              pagination={false}
            />
          </section>

          {/*4-4 : 没了*/}
          <section>
            <FirstHeader text="没了"/>
          </section>
        </section>
      </div>
    </div>
  );
}

export default NEDefense;
