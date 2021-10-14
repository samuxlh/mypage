import React from 'react';
import "./Project.css"
import {
    Link
} from 'react-router-dom';

function Project() {

    return (
        <div className="ProjectRoot">
            <section className="textFont ProjectBoard">
                {/* <div className="ProjectBoard"> */}
                    <div className="notFound">I'm still working out how I'd like this page to be so....
                        <br/>just chill for now I guess?
                        <br/>You can also check my 
                        <a target="_blank" rel="noreferrer" href="https://github.com/samuxlh" style={{marginLeft: "12px"}}><i className="fab fa-github"></i></a>
                    </div>
                    {/* <div className="techBox">
                        <i className="fab fa-react fa-5x" title="ReactJS"></i>
                        <span className="alternativeFont avgText">ReactJS</span>
                    </div>
                    <div className="techBox">
                        <i className="fab fa-node-js fa-5x" title="NodeJS"></i>
                        <span className="alternativeFont avgText">NodeJS</span>
                    </div>
                    <div className="techBox">
                        <i className="fab fa-html5 fa-5x" title="HTML5"></i>
                        <span className="alternativeFont avgText">HTML 5</span>
                    </div>
                    <div className="techBox">
                        <i className="fab fa-js fa-5x" title="Javascript"></i>
                        <span className="alternativeFont avgText">Javascript</span>
                    </div>
                    <div className="techBox">
                        <i className="fab fa-css3-alt fa-5x" title="CSS3"></i>
                        <span className="alternativeFont avgText">CSS 3</span>
                    </div>
                    <div className="techBox">
                        <i className="fab fa-python fa-5x" title="Python 3"></i>
                        <span className="alternativeFont avgText">Python 3</span>
                    </div> */}
                {/* </div> */}
            </section>
        </div>

    )
}

export default Project;