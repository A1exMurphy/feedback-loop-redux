import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import FeelingForm from './feeling/feeling';

function App() {
  const dispatch = useDispatch();


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <FeelingForm />
      </header>
    </div>
  );
}

export default App;
