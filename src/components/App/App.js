import React, { useState } from 'react';
import './App.css';
import StartScreen from '../Start/StartScreen';
import MainBoard from '../Main/MainBoard';

function App() {

  const [flag, setFlag] = useState(false)

  const handleClick = () => {
    setFlag(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        {flag ?
          <MainBoard /> :
          <div onClick={handleClick}>
            <StartScreen />
          </div>
        }
      </header>
    </div >
  );
}

export default App;
