import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Main from './components/main';
import ProjectPage from './components/project-page';
import AboutPage from './components/about-page';
import ResumePage from './components/resume-page'
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/portfolio' component={ProjectPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/resume' component={ResumePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
