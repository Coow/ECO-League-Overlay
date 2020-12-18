import React from 'react';
import Overlay from './ECO_Overlay_Adjusted.png';
import './App.css';
import GameData from './GameData.json';

function App() {

  return (
    <div className="App">
      <div className="Overlay">
        <img src={Overlay} alt="Overlay" />

        <div className="team-left">
          <h2>{GameData.kuerzel_left}</h2>
          <h1>{GameData.score_left}</h1>
        </div> 

        <div className="team-right">
          <h2>{GameData.kuerzel_right}</h2>
          <h1>{GameData.score_right}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
