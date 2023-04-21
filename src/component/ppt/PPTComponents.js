import React from "react";
import "./PPTComponents.css"

const FirstHeader = ({text}) => {
    return (
        <p className="first_header">{text}</p>
    )
}

const SecondHeader = ({text}) => {
    return (
        <p className="second_header">{text}</p>
    )
}

const ThirdHeader = ({text}) => {
    return (
        <p className="third_header">{text}</p>
    )
}

const ThirdHeaderLink = ({text, href}) => {
    return (
        <p className="third_header">
            <a href={href}>{text}</a>
        </p>
    )
}

const MainSlide = ({title, authors}) => {
    return (
        <section className="ppt-main-layout">
            <FirstHeader text={title}/><br/>
            <div className="author-info">
                {authors.map((stu) => {
                    // console.log(stu.key)
                    return (
                        <div key={stu.key} style={{marginBottom: '7px'}}>{stu.stuid}{stu.name}</div>
                    )
                })}
            </div>

            <div className="logo-div">
                <div className="logo">
                    <a href="https://www.njfu.edu.cn/">
                        <p className="logo-name">南京林业大学</p>
                        <img className="logo-img" src="/resources/img/network/main_icon.jpg"
                             alt="南京林业大学"/>
                    </a>
                </div>

                <div className="logo">
                    <a href="https://it.njfu.edu.cn/">
                        <p className="logo-name">信息科学技术学院</p>
                        <img className="logo-img" src="/resources/img/network/cs_logo.jpg"
                             alt="信息科学技术学院"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export {FirstHeader, SecondHeader, ThirdHeader, ThirdHeaderLink, MainSlide}