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

  function fisherYatesShuffle (array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array
  }

  useEffect(() => {
    const getPokeData = async()=> {
      const pokemon = await imageFetch();
      setImageData(pokemon);

      const basicArray = [1, 2, 3, 4, 5];
      const newArray = basicArray;
      console.log('preshuffle', basicArray)
      const shuffledBasicArray = fisherYatesShuffle(newArray);
      console.log('newArray', newArray);
      console.log('basicArray', basicArray);
      console.log('shuffledBasicArray', shuffledBasicArray);

      // const shuffledPokemon = fisherYatesShuffle(pokemon);
      // console.log('array', pokemon);
      // console.log('shuffledArray', shuffledPokemon);
    }
    getPokeData();
  }, []);

  // useEffect(() => {
  //   if (imageData.length > 0) {
  //     console.log(imageData);
  //   }
  // }, [imageData]);

  // useEffect(() => {
  //   const logShuffle = (array)=> {
  //     let myArray = array;
  //     console.log("Original array:", myArray);
  //     fisherYatesShuffle(myArray);
  //     console.log("Shuffled array:", myArray);
  //   }
  //   logShuffle([1, 2, 3, 4, 5, 6, 7]);
  //   logShuffle(imageData);
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
