import "./CV.css"

// https://abcdabcd987.com/about/
// https://blog.jm233333.com/cv/zh-cn/

const CV = () => {
    return (
        <div className="home-container">
            <div className="basic-info-container">
                <img
                    className="profile-photo-img"
                    src="/resources/img/common/profile_photo.jpg"
                    alt="profile"
                />
                <div className="basic-info">
                    <h1>周航(Hang Zhou)</h1>
                    <div className="basic-info-intern">南京林业大学 大三</div>
                    <div className="basic-info-intern">计算机科学与技术</div>
                    <div className="basic-info-intern">hangzhou@njfu.edu.cn</div>
                    <div className="basic-info-intern">
                        <a href="http://47.100.107.53">CV</a>&nbsp;
                        <a href="https://gitee.com/zhouzhoukang">Gitee</a>&nbsp;
                        <a href="/resources/pages/index.html">Blog</a>
                    </div>
                </div>
            </div>

            <div className="introduce-container">
            </div>

            <div className="education-background-container">
                <h2>== 教育背景 ==</h2>
                <ul>
                    <li>2020.9 - 今: 大三在读，南京林业大学，计算机科学与技术</li>
                    <li>2017.9 - 2020.7: 高中，江苏省天一中学</li>
                </ul>
            </div>

            <div className="interest-container">
                <h2>== 个人兴趣 ==</h2>
                <ul>
                    <li>语言：Python、C/C++、Java、JavaScript、RISC-V、ANTLR4、Coq ……</li>
                    <li>方向：编译原理、操作系统、软件验证、体系结构 ……</li>
                    <li>Linux Tool Chain</li>
                </ul>
            </div>

            <div className="projects-container">
                <h2>== 项目经历 ==</h2>
                <div className="projects">
                    <div className="project">
                        <div className="project-name">
                            <h3><a href="https://gitee.com/zhouzhoukang/zre">- 编译器前端 -</a></h3>
                            <div className="project-time">2022.10 - 2022.12</div>
                        </div>
                        <div className="project-descriptions">
                            <p className="project-description">不使用ANTLR等工具实现的正则引擎以及支持LL(1)分析，算符优先分析，SLR(1)分析的语法分析器，并包含这些算法的可视化。</p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-name">
                            <h3><a href="https://gitee.com/zhouzhoukang/yolodetector">- 基于注意力机制的多尺度林火图像检测研究 -</a></h3>
                            <div className="project-time">2022.11 - 2023.02</div>
                        </div>
                        <div className="project-descriptions">
                            <p className="project-description">对YOLOv5目标检测模型进行改进。项目研究不同网络结构对性能的影响，最终通过实验找到在多尺度林火图像上表现优异的网络结构。</p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-name">
                            <h3><a href="https://gitee.com/zhouzhoukang/zsound">- 音频合成器 -</a></h3>
                            <div className="project-time">2023.04 - 2023.05</div>
                        </div>
                        <div className="project-descriptions">
                            <p className="project-description">基于信号系统，音色生成，音频的数字化存储等知识，实现了包含六种不同音色的合成器，并移植至树莓派平台，实现MIDI键盘驱动，编写并部署了一套Web端服务，提供演奏录音上传云端功能。</p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-name">
                            <h3><a href="https://gitee.com/zhouzhoukang/my-ml">- 机器学习课程设计 -</a></h3>
                            <div className="project-time">2023.05 - 2023.06</div>
                        </div>
                        <div className="project-descriptions">
                            <p className="project-description">对机器学习几大算法进行应用，包括回归，神经网络，聚类等，并自己实现了部分算法。</p>
                        </div>
                    </div>

                    <div className="project">
                        <h3>- 各种GUI项目 -</h3>
                        <div className="subprojects">
                            <h4><a href="https://gitee.com/zhouzhoukang/raidsimulator">OSTEP可视化界面</a></h4>
                            <div className="project-descriptions">
                                <p className="project-description">为<a href="https://pages.cs.wisc.edu/~remzi/OSTEP/">OSTEP</a>书后习题制作一系列可视化界面。</p>
                            </div>

                            <h4><a href="https://gitee.com/zhouzhoukang/ztips">ZTips桌面标签</a></h4>
                            <div className="project-descriptions">
                                <p className="project-description">支持markdown的轻量级桌面便签。</p>
                            </div>

                            <h4><a href="https://gitee.com/zhouzhoukang/zplayer">ZPlayer视频播放</a></h4>
                            <div className="project-descriptions">
                                <p className="project-description">侧重切换的视频播放器。</p>
                            </div>

                            <h4><a href="https://gitee.com/zhouzhoukang/zkey-swing">ZKeySwing按键精灵</a></h4>
                            <div className="project-descriptions">
                                <p className="project-description">支持组合键识别的桌面按键可视化工具。</p>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-name">
                            <h3><a href="https://gitee.com/zhouzhoukang/cs61c-proj3-cpu">- 具有二级流水线的RISC-V处理器设计 -</a></h3>
                            <div className="project-time">2023.07</div>
                        </div>
                        <div className="project-descriptions">
                            <p className="project-description">CS61C Project 3 - 支持36条RISC-V指令以及具备二级流水线</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="publications-container">
                <h2>== 发表论文 ==</h2>
                <ul>
                    <li>
                        <div className="publication">
                            <a href="https://www.mdpi.com/1999-4907/14/2/315">Multi-Scale Forest Fire Recognition Model Based on Improved YOLOv5s</a>
                            <p className="publication-description">Gong Chen, <b>Hang Zhou</b>, Zhongyuan Li, Yucheng Gao, Di Bai, Renjie Xu, Haifeng Lin</p>
                            <p className="publication-description">Forests (ISSN 1999-4907), 10.3390/f14020315, 2023</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="publications-container">
                <h2>== 证书奖项 ==</h2>
                <ul>
                    <li>蓝桥杯全国软件和信息技术专业人才大赛全国总决赛C/C++程序设计大学B组三等奖 2023.06</li>
                    <li>全国大学生英语竞赛(NECCS)三等奖 2021.05</li>
                    <li>南京林业大学一等奖学金 2022.11</li>
                    <li>CET-4(580) CET-6(533)</li>
                </ul>
            </div>
            <footer>
                <p>Last Update: July 23, 2023</p>
            </footer>
        </div>
    )
}

export default CV
