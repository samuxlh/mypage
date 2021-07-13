import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="alternativeFont">
          <ul className="headerLinkList">
            <li className="menuLink"><Link to="/">Home</Link></li>
            <li className="menuLink"><Link to="/about">Who am I?</Link></li>
            <li className="menuLink"><Link to="/projects">My Projects</Link></li>
            <li className="menuLink"><Link to="/contact">Wanna contact me?</Link></li>
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
