import {Button} from "@douyinfe/semi-ui";
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <div className="blog-title">
        Zhou Hang's Blog (TODO)
      </div>

      <Button onClick={() => {navigate('/blog/ne-defense');}}>
        计算机网络实习结题报告
      </Button><br/>

      <Button onClick={() => {navigate('/blog/rpi-open');}}>
        嵌入式项目开题报告
      </Button><br/>

      <Button onClick={() => {navigate('/blog/rpi-defense');}}>
        嵌入式项目结题报告
      </Button><br/>

      <div className="apple-container">
        <img
          src="/resources/img/common/apple.png"
          className="apple-logo"
          alt="apple"
        />
      </div>
    </div>
  )
}

export default Blog;
