import React from 'react';
import "./Project.css"
import CarameloIMG from '../../img/caramelo.png'
import LightIMG from '../../img/museulight-blog.png'

function Project() {

    return (
        <div className="ProjectRoot">
            <section className="textFont">
                <div className="ProjectBoard">
                    <p>These are only commercial projects I've worked on, most of my personal projects can be found <a className="animatedLink" href="https://github.com/samuxlh?tab=repositories">here</a>.</p>
                    <div className="projectBox alternativeFont" onClick={()=>window.open('https://caramelovem.com.br/')} title='Click to see!'>
                        <img src={CarameloIMG} alt='Caramelo' className="thumb" />
                        <div className="projectCard">
                            <p className="alternativeFont avgText">Caramelo</p>
                            <p className="defaultText">Responsive Web Homepage</p>
                            <ul>
                                <li>- React JS </li>
                                <li>- HTML</li>
                                <li>- CSS</li>
                            </ul>
                            <p className="defaultText">Android APP</p>
                            <ul>
                                <li>- Flutter</li>
                                <li>- Dart</li>
                            </ul>
                        </div>
                    </div>
                    <div className="projectBox alternativeFont" onClick={()=>window.open('https://www.museulight.com.br/blog')} title='Click to see!'>
                        <img src={LightIMG} alt='MuseuLight Blog' className="thumb" />
                        <div className="projectCard">
                            <p className="alternativeFont avgText">Museu Light</p>
                            <p className="defaultText">Responsive Blog Layout</p>
                            <ul>
                                <li>- HTML </li>
                                <li>- CSS</li>
                                <li>- .Net</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Project;