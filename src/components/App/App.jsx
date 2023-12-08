import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import FeelingForm from './feeling/feeling';
import UnderstandingForm from '../understanding/understanding';
import SupportForm from '../support/support';
import CommentsForm from '../comments/comments';
import ReviewInputs from '../review/review';
import SuccessScreen from '../success/success';

function App() {


//use routes to trigger page changes
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>

          </header>
            <div>
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
              
              <Route exact path="/review">
                <ReviewInputs />
              </Route>

              <Route exact path="/success">
                <SuccessScreen />
              </Route>
            </div>

      </Router>
    </div>
  );
}

export default App;
