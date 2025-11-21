import { useState } from 'react'
import { Header } from './components/header.jsx';
import { CardDisplay } from './components/cardDisplay.jsx';
import { imageFetch } from './components/imageData.jsx';
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  imageFetch();

  return (
    <div className='container'>

      <Header
        currentScore = {currentScore}
        highScore = {highScore}
      />

      <CardDisplay/>
    </div>
  )
}

export default App
