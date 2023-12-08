import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import FeelingForm from './feeling/feeling';
import UnderstandingForm from '../understanding/understanding';
import SupportForm from '../support/support';
import CommentsForm from '../comments/comments';

function App() {
  const dispatch = useDispatch();

//use routes to trigger page changes
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          <Route exact path="/">
           <FeelingForm />
          </Route>

          <Route exact path="/understanding">
            <UnderstandingForm />
          </Route>

          <Route exact path="/support">
            <SupportForm />
          </Route>

          <Route exact path="/comments">
            <CommentsForm />
          </Route>
          

        </header>
      </Router>
    </div>
  );
}

export default App;
