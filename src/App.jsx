import { useEffect, useState } from 'react'
import { Header } from './components/header.jsx';
import { CardDisplay } from './components/cardDisplay.jsx';
import { imageFetch } from './components/imageData.jsx';
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [imageData, setImageData] = useState([]);
  // let alreadySelected = [];
  // const [alreadySelected, setAlreadySelected] = useState([]);

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

  // function fisherYatesShuffle (array) {
  //   let currentIndex = array.length, randomIndex;

  //   while (currentIndex !== 0) {
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex--;

  //       [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //   }
  //   return array
  // }

  // let myArray = [1, 2, 3, 4, 5, 6, 7];
  // console.log("Original array:", myArray);
  // fisherYatesShuffle(myArray);
  // console.log("Shuffled array:", myArray);

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
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
