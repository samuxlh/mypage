import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.js';
import '../node_modules/@fortawesome/fontawesome-free/js/regular.js';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js';

function App() {

  function setTabActive(active) {
    let linkList = document.getElementsByClassName('ID001');
    switch (active) {
      case 0:
        linkList[0].classList.add('menuLink-active');
        linkList[1].classList.remove('menuLink-active');
        linkList[2].classList.remove('menuLink-active');
        linkList[3].classList.remove('menuLink-active');
        break;
      case 1:
        linkList[1].classList.add('menuLink-active');
        linkList[0].classList.remove('menuLink-active');
        linkList[2].classList.remove('menuLink-active');
        linkList[3].classList.remove('menuLink-active');
        break;
      case 2:
        linkList[2].classList.add('menuLink-active');
        linkList[1].classList.remove('menuLink-active');
        linkList[0].classList.remove('menuLink-active');
        linkList[3].classList.remove('menuLink-active');
        break;
      case 3:
        linkList[3].classList.add('menuLink-active');
        linkList[1].classList.remove('menuLink-active');
        linkList[2].classList.remove('menuLink-active');
        linkList[0].classList.remove('menuLink-active');
        break;

      default:
        break;
    }
  }

  // function syncHeaderURL(){
  // const pageURL = window.location.href;
  // if (pageURL.includes('about')) {
  //   setTabActive(1);
  // } else if (pageURL.includes('projects')) {
  //   setTabActive(2);
  // } else if (pageURL.includes('contact')) {
  //   setTabActive(3);
  // } else {
  //   setTabActive(0);
  // }
  // }

  return (
    <div className="App">
      <ParticlesBg color="#A239EA" num={200} type="cobweb" bg={true} />
      <Router>
        <div className="alternativeFont">
          <ul className="headerLinkList">
            <li className="menuLink" onClick={() => setTabActive(0)}><Link className="ID001" to="/">Home</Link></li>
            <li className="menuLink" onClick={() => setTabActive(1)}><Link className="ID001" to="/about">About Me</Link></li>
            <li className="menuLink" onClick={() => setTabActive(2)}><Link className="ID001" to="/projects">My Projects</Link></li>
            <li className="menuLink" onClick={() => setTabActive(3)}><Link className="ID001" to="/contact">Contact</Link></li>
            
          </ul>
        </div>
        <main className="defaultContainer">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
