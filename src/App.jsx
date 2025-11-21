import { useState } from 'react'
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className='container'>
      <h1>Pokemon Memory Game</h1>
      <h2>Click the Pokemon you haven't already selected</h2>

      <div className="scores">
        <div className="current">
          Current Score: {currentScore}
        </div>
        <div className="high">
          High Score: {highScore}
        </div>
      </div>

      <div className='cardContainer'>
        <div className="card">card 1</div>
        <div className="card">card 2</div>
        <div className="card">card 3</div>
        <div className="card">card 4</div>
        <div className="card">card 5</div>
        <div className="card">card 6</div>
        <div className="card">card 7</div>
        <div className="card">card 8</div>
        <div className="card">card 9</div>
        <div className="card">card 10</div>
      </div>
    </div>
  )
}

export default App
