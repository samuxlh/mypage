import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

function Header() {
    return (
        <Router>
            <header>
                <div className="alternativeFont">
                    <ul className="headerLinkList">
                        <li className="menuLink"><Link to="/">Home</Link></li>
                        <li className="menuLink"><Link to="/about">About Me</Link></li>
                        <li className="menuLink"><Link to="/projects">My Projects</Link></li>
                        <li className="menuLink"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
        </Router>
    )
}

export default Header;