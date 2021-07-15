import React from 'react'

function Contact() {
    return (
        <div className="textFont posRelative">
            <p className="textAlignCenter">Don't be shy. You can message me at any of these:</p>
            <div className="socialBox">
                    <a target="_blank" rel="noreferrer" href="https://github.com/samuxlh"><i className="fab fa-github fa-5x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/nonicksam"><i className="fab fa-twitter fa-5x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/vvssam"><i className="fab fa-twitch fa-5x"></i></a>
                    <a target="_blank" rel="noreferrer" href="mailto:samuxlh@gmail.com"><i className="far fa-envelope fa-5x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuelcsantos/"><i className="fab fa-linkedin fa-5x"></i></a>
            </div>
        </div>
    )
}

export default Contact;