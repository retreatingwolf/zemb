import {Button} from "@douyinfe/semi-ui";
import { useNavigate } from 'react-router-dom'
import {IconCode, IconHome, IconSort} from "@douyinfe/semi-icons";
import React from "react";
import "./index.scss"

const Blog = () => {
  const navigate = useNavigate();

  const switchMode = () => {
    const body = document.body;
    // const ppt = document.getElementById()
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  return (
    <div className="blog-container">
      {/*顶部导航栏*/}
      <div className="title-container">
        <p className="blog-title">zzk's Blog</p>

        <div className="title-buttons">
          <Button theme="borderless" icon={<IconHome/>} size="large" onClick={() => {navigate('/');}}
                  className="theme-button">
            个人简历
          </Button><br/>

          <Button theme="borderless" icon={<IconCode/>} onClick={()=>window.open("https://gitee.com/zhouzhoukang/zemb")}
                  className="theme-button">
            Gitee
          </Button>

          <Button theme="borderless" icon={<IconSort/>} onClick={switchMode} className="theme-button">
            切换主题
          </Button>
        </div>
      </div>

      {/*主要内容*/}
      <div className="content-container">
        {/*标题部分*/}
        <div className="content-title">
          <div className="apple-container">
            <img src="/resources/img/common/apple.webp"
                 className="apple-logo" alt="apple"/>
          </div>
          <h1>zzk's Blog </h1>
        </div>

        {/*内容部分*/}
        <div className="contents">

          <div className="note-container">
            <Button icon={<IconHome/>} size="large" onClick={() => {navigate('/');}}>
              个人简历
            </Button><br/>
          </div>

          <div className="ppt-container">
            <Button size="large" onClick={() => {navigate('/blog/ne-defense');}}>
              计网工实习结题报告
            </Button><br/>

            <Button size="large" onClick={() => {navigate('/blog/rpi-open');}}>
              嵌入式项目开题报告
            </Button><br/>

            <Button size="large" onClick={() => {navigate('/blog/rpi-defense');}}>
              嵌入式项目结题报告
            </Button><br/>
          </div>

          <div className="project-container">
            <Button size="large" onClick={() => {navigate('/blog/music-frontend');}}>
              嵌入式课程项目前端
            </Button><br/>

            <Button size="large" onClick={() => {navigate('/blog/setting');}}>
              设置
            </Button><br/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog;
