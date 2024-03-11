import { Outlet, useNavigate } from 'react-router-dom'
import {Button} from "@douyinfe/semi-ui";
import {IconCode, IconFolderOpen, IconHome, IconSort} from "@douyinfe/semi-icons";
import React from "react";
import "./index.scss"

const Home = () => {
  const navigate = useNavigate();

  // 切换主题色
  const switchMode = () => {
    const body = document.body;
    // const ppt = document.getElementById()
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  return(
    <div className="home-container">
      {/*顶部导航栏*/}
      <div className="title-container">
        <p className="blog-title">zzk's Blog</p>

        <div className="title-buttons">
          <Button theme="borderless" icon={<IconHome/>} size="large" onClick={() => {navigate('/');}}
                  className="theme-button">
            个人简历
          </Button><br/>

          <Button theme="borderless" icon={<IconFolderOpen/>} size="large" onClick={() => {navigate('/blog');}}
                  className="theme-button">
            Blog
          </Button><br/>

          <Button theme="borderless" icon={<IconCode/>} onClick={()=>window.open("https://gitee.com/zhouzhoukang/")}
                  className="theme-button">
            Gitee
          </Button>

          <Button theme="borderless" icon={<IconSort/>} onClick={switchMode} className="theme-button">
            切换主题
          </Button>
        </div>
      </div>

      <Outlet/>

      {/*底部信息栏目*/}
      <div className="footer-container">
        <span>Last Update: 2024-03-11</span>
        <a className="beian-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"> 苏ICP备2023026750号</a>
      </div>
    </div>
  )
}

export default Home