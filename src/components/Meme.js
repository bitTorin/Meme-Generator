import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    function generateMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url)
    }

    return (
        <main>
            <div className="input">
                <input className="inputField" type="text" placeholder="Top text"></input>
                <input className="inputField" type="text" placeholder="Bottom text"></input>
                <button className="inputBtn" onClick={generateMeme}>Get a new meme image  🖼</button>
            </div>
        </main>
    )
}