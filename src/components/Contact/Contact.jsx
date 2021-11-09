import React from 'react'

function Contact() {
    return (
        <div className="textFont posRelative">
            <p className="textAlignCenter">Don't be shy. You can message me at any of these:</p>
            <div className="socialBox">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em'}}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/samuxlh"><i className="fab fa-github fa-3x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/samuxlh"><span>/samuxlh</span></a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                    <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/vvssam"><i className="fab fa-twitch fa-3x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/vvssam"><span>/vvssam</span></a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuelcsantos/"><i className="fab fa-linkedin fa-3x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuelcsantos/"><span>/samuelcdossantos</span></a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                    <a target="_blank" rel="noreferrer" href="mailto:samuelcdossantos@hotmail.com"><i className="far fa-envelope fa-3x"></i></a>
                    <a target="_blank" rel="noreferrer" href="mailto:samuelcdossantos@hotmail.com"><span>Contact through email</span></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;