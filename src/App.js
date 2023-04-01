import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Quote } from './features/quote/quote';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <Counter /> */}
        <Quote/>
        
      {/* </header> */}
    </div>
  );
}

export default App;
