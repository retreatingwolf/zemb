import "../CV/index.scss"
import "./index.scss"

const CV_En = () => {
  return (
    <div className="cv-container">
      <div className="basic-info-container">
        <img
          className="profile-photo-img"
          src="/resources/img/common/profile_photo.webp"
          alt="profile"
        />
        <div className="basic-info">
          <h1>周航 (Zhou Hang)</h1>
          <div className="basic-info-intern">Nanjing Forestry University, Senior</div>
          <div className="basic-info-intern">Computer Science</div>
          <div className="basic-info-intern">hangzhou@njfu.edu.cn</div>
          <div className="basic-info-intern">
            <a href="http://47.100.107.53">CV(PDF)</a>&nbsp;
            <a href="/">CV(中文)</a>&nbsp;
            <a href="https://gitee.com/zhouzhoukang" target="_blank" rel="noreferrer">Gitee</a>&nbsp;
            <a href="/Blog">Blog</a>
          </div>
        </div>
      </div>

      <div className="introduce-container">
      </div>

      <div className="education-background-container">
        <h2>Education</h2>
        <ul className="education-background-ul-en">
          <li>2020.9 - today: Student of Nanjing Forestry University in Computer Science</li>
          <li>2017.9 - 2020.7: Jiangsu Tianyi High School</li>
        </ul>
      </div>

      <div className="interest-container">
        <h2>Interests</h2>
        <ul>
          <li>Programming Language: Python, C/C++, Java, JavaScript, RISC-V, ANTLR4, Coq, etc.</li>
          <li>Interest: Fundamentals of Compiling, OS, Software Verification, Computer Architecture, etc.</li>
          <li>Linux Tool Chain.</li>
        </ul>
      </div>

      <div className="projects-container">
        <h2>Highlighted Projects</h2>
        <div className="projects">
          <div className="project">
            <div className="project-name">
              <h3><a href="https://gitee.com/zhouzhoukang/zre">- Compiler Frontend -</a></h3>
              <div className="project-time">2022.10 - 2022.12</div>
            </div>
            <div className="project-descriptions">
              <span className="project-description">An analysis tool including regex engine, lexical analyzer, LL(1) parser, operator-precedence parser, SLR(1) parser, and a powerful visual interface.</span>
            </div>
          </div>

          <div className="project">
            <div className="project-name">
              <h3><a href="https://gitee.com/zhouzhoukang/yolodetector">- Forest Fire Detector -</a></h3>
              <div className="project-time">2022.11 - 2023.02</div>
            </div>
            <div className="project-descriptions">
              <span className="project-description">A tool used for multi-scale forest fire recognition based on YOLOv5.</span>
            </div>
          </div>

          <div className="project">
            <div className="project-name">
              <h3><a href="https://gitee.com/zhouzhoukang/zsound">- Audio Synthesizer System -</a></h3>
              <div className="project-time">2023.04 - 2023.05</div>
            </div>
            <div className="project-descriptions">
              <span className="project-description">With the knowledge of signal system, audio synthesis, I implement a synthesizer which can synthesize six different timbres, and port it to Raspberry Pi. I also deployed a web site for recording upload.</span>
            </div>
          </div>

          <div className="project">
            <div className="project-name">
              <h3><a href="https://gitee.com/zhouzhoukang/my-ml">- ML Algorithms' Implementation -</a></h3>
              <div className="project-time">2023.05 - 2023.06</div>
            </div>
            <div className="project-descriptions">
              <span className="project-description">My implementation of some classical machine learning algorithm, including regression, neural network, clustering, etc.</span>
            </div>
          </div>

          <div className="project">
            <div className="project-name">
              <h3><a href="https://gitee.com/zhouzhoukang/cs61c-proj3-cpu">- RISC-V Processor -</a></h3>
              <div className="project-time">2023.06 - 2023.07</div>
            </div>
            <div className="project-descriptions">
              <span className="project-description"><a href="https://cs61c.org/su23/projects/proj3/" target="_blank" rel="noreferrer">UCB CS61C Project 3</a> - A RISC-V processor with 2-stage pipeline and 36 instructions.</span>
            </div>
          </div>

          <div className="project">
            <h3>- GUI Projects -</h3>
            <div className="subprojects">
              <h4><a href="https://gitee.com/zhouzhoukang/raidsimulator">-- OSTEP Visual Interface --</a></h4>
              <div className="project-descriptions">
                <span className="project-description">A series of graphic interface for simulators in <a href="https://pages.cs.wisc.edu/~remzi/OSTEP/">OSTEP</a>.</span>
              </div>

              <h4><a href="https://gitee.com/zhouzhoukang/ztips">-- ZTips - Light Desktop Note --</a></h4>
              <div className="project-descriptions">
                <span className="project-description">A lightweight note-taking desktop application featuring markdown supporting and top floating.</span>
              </div>

              <h4><a href="https://gitee.com/zhouzhoukang/zplayer">-- ZPlayer - Different Video Player --</a></h4>
              <div className="project-descriptions">
                <span className="project-description">A video player features switching. It can achieve a Powerpoint-like effect with appropriate animations.</span>
              </div>

              <h4><a href="https://gitee.com/zhouzhoukang/zkey-swing">-- ZKeySwing --</a></h4>
              <div className="project-descriptions">
                <span className="project-description">A key visualization application that floats on the desktop and can be displayed in real-time.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="publications-container">
        <h2>Publication</h2>
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
        <h2>Honor</h2>
        <ul>
          <li>The National Professional Software Engineering "Blue Bridge Cup" Design Contest Finals Third Prize. 2023.06</li>
          <li>National English Competition for College Students (NECCS) The Third Prize 2021.05</li>
          <li>Nanjing Forestry University Scholarship 2022.11</li>
          <li>CET-4(580) CET-6(533)</li>
        </ul>
      </div>

      <footer>
        <p>Last Update: August 3, 2023</p>
      </footer>
    </div>
  )
}

export default CV_En;
