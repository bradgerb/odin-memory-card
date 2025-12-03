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
      setImageData(pokemon);
    }
    getPokeData();

  }, []);

  useEffect(() => {
    if (imageData.length > 0) {
      console.log(imageData[0].name);
    }
  }, [imageData]);

  return (
    <div className='container'>

      <Header
        // currentScore = { currentScore }
        // highScore = { highScore }
      />

    {imageData.map((image) => (
      <div key={image.id}>
        <CardDisplay
          url = { image.sprite }
          alt = { image.name }
          id = { image.id }
        />
      </div>
    ))};
    </div>
  )
}

export default App
