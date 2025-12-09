import { useEffect, useState } from 'react'
import { Header } from './components/header.jsx';
import { CardDisplay } from './components/cardDisplay.jsx';
import { imageFetch } from './components/imageData.jsx';
import { GameOverMenu } from './components/gameOver.jsx';
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const getPokeData = async()=> {
      const pokemon = await imageFetch();
      setImageData(pokemon);
    }
    getPokeData();
  }, []);

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
              isShown = { isShown }
              setIsShown = { setIsShown }
              imageData = { imageData }
              setImageData = { setImageData }
            />
          </div>
        ))}
      </div>

      <div className={`gameOver ${isShown ? 'gameOverShow' : ''}`}>
        <GameOverMenu
          currentScore = { currentScore }
          setCurrentScore = { setCurrentScore }
          setIsShown = { setIsShown }
        />
      </div>

    </div>
  )
}

export default App
