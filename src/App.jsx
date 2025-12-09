import { useEffect, useState } from 'react'
import { Header } from './components/header.jsx';
import { CardDisplay } from './components/cardDisplay.jsx';
import { imageFetch } from './components/imageData.jsx';
import { LossMenu } from './components/gameOver.jsx';
import { WinMenu } from './components/youWin.jsx';
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [showLoss, setShowLoss] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [newData, setNewData] = useState(false);

  useEffect(() => {
    const getPokeData = async()=> {
      const pokemon = await imageFetch();
      setImageData(pokemon);
    }
    getPokeData();
  }, [newData]);

  // useEffect(() => {
  //   if (imageData.length > 0) {
  //     console.log(imageData);
  //   }
  // }, [imageData]);

  return (
    <div className='container'>

      <Header
        currentScore = { currentScore }
        highScore = { highScore }
      />

      <div className="cardContainer">
        {imageData.map((image) => (
          <div key={image.id}>
            <CardDisplay
              url = { image.sprite }
              alt = { image.name }
              id = { image.id }
              currentScore = { currentScore }
              setCurrentScore = { setCurrentScore }
              highScore = { highScore }
              setHighScore = { setHighScore }
              showLoss = { showLoss }
              setShowLoss = { setShowLoss }
              showWin = { showWin }
              setShowWin = { setShowWin }
              imageData = { imageData }
              setImageData = { setImageData }
            />
          </div>
        ))}
      </div>

      <div className={`gameOver loss ${showLoss ? 'gameOverShow' : ''}`}>
        <LossMenu
          currentScore = { currentScore }
          setCurrentScore = { setCurrentScore }
          setShowLoss = { setShowLoss }
          newData = { newData }
          setNewData = { setNewData }
        />
      </div>

      <div className={`gameOver win ${showWin ? 'gameOverShow' : ''}`}>
        <WinMenu
          currentScore = { currentScore }
          setCurrentScore = { setCurrentScore }
          setShowWin = { setShowWin }
          newData = { newData }
          setNewData = { setNewData }
        />
      </div>

    </div>
  )
}

export default App
