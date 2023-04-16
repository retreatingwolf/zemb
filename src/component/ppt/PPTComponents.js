import React from "react";
import "./pptgeneral.css"

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

export {FirstHeader, SecondHeader, ThirdHeader, ThirdHeaderLink}