import {Button} from "@douyinfe/semi-ui";
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Zhou Hang's Blog (TODO)</h1>
      </div>

      <Button size="large" onClick={() => {navigate('/');}}>
        个人简历
      </Button><br/>

      <Button size="large" onClick={() => {navigate('/blog/ne-defense');}}>
        计网工实习结题报告
      </Button><br/>

      <Button size="large" onClick={() => {navigate('/blog/rpi-open');}}>
        嵌入式项目开题报告
      </Button><br/>

      <Button size="large" onClick={() => {navigate('/blog/rpi-defense');}}>
        嵌入式项目结题报告
      </Button><br/>

      <Button size="large" onClick={() => {navigate('/blog/music-frontend');}}>
        嵌入式课程项目前端
      </Button><br/>

      <Button size="large" onClick={() => {navigate('/blog/setting');}}>
        设置
      </Button><br/>

      <div className="apple-container">
        <img
          src="/resources/img/common/apple.webp"
          className="apple-logo"
          alt="apple"
        />
      </div>
    </div>
  )
}

export default Blog;
