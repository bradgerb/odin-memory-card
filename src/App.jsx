import { useState } from 'react'
import { Header } from './components/header.jsx';
import { CardDisplay } from './components/cardDisplay.jsx';
import { ImageFetcher } from './components/imageData.jsx';
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const { imageData } = ImageFetcher();
  const imageID = imageData.id;
  const imageName = imageData.name;
  // const imageSprite = imageData.sprites.other["official-artwork"].front_default;

  console.log(imageID, imageName);


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
