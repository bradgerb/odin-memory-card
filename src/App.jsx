import { useEffect, useState } from 'react'
import { Header } from './components/header.jsx';
import { CardDisplay } from './components/cardDisplay.jsx';
import { imageFetch } from './components/imageData.jsx';
import './App.css'

function App() {
  // const [currentScore, setCurrentScore] = useState(0);
  // const [highScore, setHighScore] = useState(0);
  const [imageData, setImageData] = useState([]);


  useEffect(() => {
    const getPokeData = async()=> {
      const pokemon = await imageFetch();
      // console.log(pokemon);
      // console.log(pokemon[0]);
      // console.log(pokemon[0].name);
      setImageData(pokemon);
        // console.log(imageData);
        // const firstEle = imageData[0];
        // console.log(firstEle);
        // const firstName = firstEle.sprite;
        // console.log(firstName);
    }
    getPokeData();

  }, []);

  useEffect(() => {
    if (imageData.length > 0) {
      console.log(imageData[0].name);
    }
  }, [imageData]);

  // console.log(imageData);
  // const firstEle = imageData[0];
  // console.log(firstEle);
  // const firstName = firstEle.sprite;
  // console.log(firstName);
  // console.log(imageData[0]);
  // console.log(imageData[0]["id"]);
  // console.log(imageData[0].sprite);

  // const newTest = imageData[0].name;
  // console.log(newTest);

  return (
    <div className='container'>

      <Header
        // currentScore = { currentScore }
        // highScore = { highScore }
      />

    {imageData.map((image) = (
      <div key={image.id}>
        <CardDisplay
          url = { image.sprite }
          alt = { image.name }
          // id = { imageData.id }
        />
      </div>
    ))};
    </div>
  )
}

export default App
