import React from "react";
import troll from "../images/troll-face.png"

export default function Header() {
    return (
        <div className="header">
            <img className="titleImg" src={troll} />
            <h2 className="title">Meme Generator</h2>
            <h4 className="subtitle">React Course - Project 3</h4>
        </div>
    )
}