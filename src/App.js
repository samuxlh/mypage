import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import Home from './components/Home/Home';
import Project from './components/Projects/Project';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.js';
import '../node_modules/@fortawesome/fontawesome-free/js/regular.js';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js';

function App() {

  return (
    <div className="App">
      <ParticlesBg color="#A239EA" num={30} type="cobweb" bg={true} />
      <Router>
        <div className="alternativeFont floatingMenu">
          <ul className="headerLinkList">
            <li className="menuLink"><Link to="/">Home</Link></li>
            <li className="menuLink"><Link to="/projects">Portfolio</Link></li>
          </ul>
        </div>
        <main className="defaultContainer">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
