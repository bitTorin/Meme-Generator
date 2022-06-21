import React from "react";

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/2hgfw.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/2hgfw.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    function generateMeme() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="input">
                <input className="inputField" type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}></input>
                <input className="inputField" type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                <button className="inputBtn" onClick={generateMeme}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img className="memeImage" src={meme.randomImage} />
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}