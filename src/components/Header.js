import React from "react";
import troll from "../images/Troll Face.png"

// Header component for the header
export default function Header() {
    return (
        <header className="header"> 
            <img className="header-icon" src={troll} alt="troll face"></img>
            <h2 className="header-title">Meme Generator</h2>
            <h5 className="header-text">React Course - Project 3</h5>
        </header>
    )
}