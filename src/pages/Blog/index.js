import React from "react";
import { Button } from "@douyinfe/semi-ui";
import { IconHome } from "@douyinfe/semi-icons";
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">

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
            <Button onClick={()=>navigate("/resources/notes/1-StartUp.md")}>
              笔记
            </Button>
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
