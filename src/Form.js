import { useState, useEffect } from "react";


export function Form() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState("")

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    console.log(allMemes)

    function handleChange(event) {
        const { name, value } = event.target
        setMeme({
            ...meme,
            [name]: value
        })
    }

    function getMeme() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme({
            ...meme,
            randomImage: url
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text" className='first' placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange} />
                <input className='second' type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button className="btn" onClick={getMeme}>Get a new image</button>
            </div>
            <div className="meme-container">
                <img className="meme" src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
