import "./Home.css"


// https://abcdabcd987.com/about/
// https://blog.jm233333.com/cv/zh-cn/

const Home = () => {
    return (
        <div className="home-container">
            <div className="basic-info-container">
                <img
                    className="profile-photo-img"
                    src="/resources/img/common/profile_photo.jpg"
                    alt="profile"
                />
                <div className="basic-info">
                    <h1>周航</h1>
                    <div>南京林业大学 大三</div>
                    <div>计算机科学与技术</div>
                    <div>hangzhou@njfu.edu.cn</div>
                    <div>
                        <a href="https://gitee.com/zhouzhoukang">Gitee</a>
                    </div>
                </div>
            </div>

            <div className="introduce-container">
            </div>

            <div className="education-background-container">
                <h2>教育背景</h2>
                <ul>
                    <li>2020.9至今: 大三在读，南京林业大学，计算机科学与技术</li>
                    <li>2017.9-2020.7: 高中，江苏省天一中学</li>
                </ul>
            </div>

            <div className="interest-container">
                <h2>个人兴趣</h2>
                <ul>
                    <li>编程语言：Python、C/C++、Java、JavaScript</li>
                    <li>计算机：编译原理、操作系统、软件验证、数据结构</li>
                    <li>Linux：Makefile、GDB、Fish</li>
                </ul>
            </div>

            <div className="projects-container">
                <h2>项目经历</h2>
                <h3><a href="https://gitee.com/zhouzhoukang/zre">编译器前端</a></h3>
                <h3><a href="https://gitee.com/zhouzhoukang/zsound">音频合成器</a></h3>
                <h3><a href="https://gitee.com/zhouzhoukang/yolodetector">基于注意力机制的多尺度林火图像检测研究</a></h3>
                <h3><a href="https://gitee.com/zhouzhoukang/my-ml">机器学习课程设计</a></h3>
                <h3>各种GUI项目</h3>
                <h4><a href="https://gitee.com/zhouzhoukang/raidsimulator">OSTEP可视化界面</a></h4>
                <h4><a href="https://gitee.com/zhouzhoukang/ztips">ZTips桌面标签</a></h4>
                <h4><a href="https://gitee.com/zhouzhoukang/zplayer">ZPlayer视频播放</a></h4>
                <h4><a href="https://gitee.com/zhouzhoukang/zkey-swing">ZKeySwing按键精灵</a></h4>
            </div>

            <div className="publications-container">
                <h2>发表论文</h2>
                <ul>
                    <li>
                        <a href="https://www.mdpi.com/1999-4907/14/2/315">Multi-Scale Forest Fire Recognition Model Based on Improved YOLOv5s</a>
                    </li>
                </ul>
            </div>

            <div className="publications-container">
                <h2>证书奖项</h2>
                <h3>2023蓝桥杯江苏省一等奖</h3>
                <h3>2020全国大学生英语竞赛三等奖</h3>
            </div>

            <header className="home-header">
                <img
                    src="/resources/img/common/apple.png"
                    className="apple-logo"
                    alt="apple" />
            </header>

            <footer>
                <p>Last Update: June 15, 2023</p>
            </footer>


        </div>
    )
}

export default Home
