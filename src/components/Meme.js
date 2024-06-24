import React from "react";

// Meme component renders the main content.
export default function Meme() {
    // State for saving meme top text, bottom text, and image  
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    //State to save all of the meme data from the useEffect
    const [allMemes, setAllMemes] = React.useState([])

    // Fetches from the meme api and puts the data into state
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // Gets random image on user click
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
        
    }

    // Change event. When user types in text fields, state updates and actively changes in the UI.
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main>
            <div className="meme-form">
                <input 
                    className="meme-topInput" 
                    type="text" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="meme-bottomInput" 
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="meme-button" 
                    onClick={getMemeImage} 
                    >
                        Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img 
                    className="meme--image" 
                    src={meme.randomImage}
                    alt="Meme Image">
                </img>
                <h2 className="meme--imageText top">{meme.topText}</h2>
                <h2 className="meme--imageText bottom">{meme.bottomText}</h2>
            </div>
            
            
        </main>
    )
}