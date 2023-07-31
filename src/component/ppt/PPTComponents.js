import React from "react";
import "./PPTComponents.scss"

const FirstHeader = ({text}) => {
    return (
        <h1 className="first-header">{text}</h1>
    )
}

const SecondHeader = ({text}) => {
    return (
        <h2 className="second-header">{text}</h2>
    )
}

const ThirdHeader = ({text}) => {
    return (
        <h3 className="third-header">{text}</h3>
    )
}

const ThirdHeaderLink = ({text, href}) => {
    return (
        <p className="third-header">
            <a href={href}>{text}</a>
        </p>
    )
}

const MainSlide = ({ title, authors }) => {
    return (
        <section className="ppt-main-layout">
            <FirstHeader text={title}/><br/>
            <div className="authors-info">
                {authors.map((stu) => {
                    return (
                        <div key={stu.key} className="author-info">{stu.stuid}{stu.name}</div>
                    )
                })}
            </div>

            <div className="logo-div">
                <div className="logo">
                    <a href="https://www.njfu.edu.cn/" style={{textDecoration: 'none'}}>
                        <p className="logo-name">Nanjing Forestry University</p>
                        <img className="logo-img" src="/resources/img/common/NFU_logo.webp"
                             alt="南京林业大学"/>
                    </a>
                </div>

                <div className="logo">
                    <a href="https://it.njfu.edu.cn/" style={{textDecoration: 'none'}}>
                        <p className="logo-name">Information Science and Technology School</p>
                        <img className="logo-img" src="/resources/img/common/cs_logo.webp"
                             alt="信息科学技术学院"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export {
  FirstHeader,
  SecondHeader,
  ThirdHeader,
  ThirdHeaderLink,
  MainSlide
}