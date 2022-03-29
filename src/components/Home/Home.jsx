import React from 'react';
import "./Home.css"
import pp from '../../img/pp.jpg'
function Home() {
    return (
        <div>
            <span>
                <p className="textFont bigText">Hello! My name is Sam.</p>
                <p className="textFont bigText">I am a 22 years old developer from Brazil currently working for Vortx DTVM as Data Engineer Intern.</p>
                <p className="textFont bigText">I love working with Python, NodeJS, and AWS to deliver on-demand escalable web services.</p>
            </span>
            <div style={{ display: 'flex' }}>
                <img style={{ width: '420px', borderRadius: '32px' }} src={pp} alt='Sam smiling at his table.'></img>
                <ul>
                    <li className="menuLinkLeft textFont a24pxfont listItem"><a target="_blank" rel="noreferrer" href="https://github.com/samuxlh"><i className="fab fa-github fa-2x"></i></a>Github</li>
                    <li className="menuLinkLeft textFont a24pxfont listItem"><i className="fab fa-linkedin fa-2x"></i>LinkedIn</li>
                    <li className="menuLinkLeft textFont a24pxfont listItem"><i className="far fa-envelope fa-2x"></i>Email me</li>
                </ul>
            </div>

        </div>
    )
}

export default Home;