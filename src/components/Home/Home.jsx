import React from 'react';
import "./Home.css"
import Typist from 'react-typist';
function Home() {
    return (
        <div>
            <span>
            <p className="textFont defaultText">Welcome to my page, my name is</p>
            <h1 className="titleFont bigText"><Typist cursor={{ hideWhenDone: true }}>Samuel Santos</Typist></h1>
            <p className="textFont defaultText">But you can call me Sam if you want to.</p>
            <p className="textFont defaultText">I like React, Python, games, cybersec and data science. You can find more info using the bar on top...</p>
            </span>
        </div>
    )
}

export default Home;