import { useState } from "react";

const Card = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore, isShown, setIsShown, imageData, setImageData})=> {

    const [alreadySelected, setAlreadySelected] = useState(false);
    
    const handleClick = () => {
        if (alreadySelected === false && isShown === false) {
            setAlreadySelected(true);
            scoreUp();
            setImageData(fisherYatesShuffle(imageData));
        } else {
            gameOver();
        }    
    }

    function gameOver() {
        setIsShown(true);
        console.log('gameOver', isShown);
    }

    function scoreUp() {
        setCurrentScore(currentScore + 1);
        if (currentScore >= highScore) {
            setHighScore(highScore + 1);
        }
    }

    function fisherYatesShuffle (array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array
    }

    return (
        <>
            <button className="card" onClick={handleClick}>
                <img src={url} alt={alt} id={id} />
            </button>
        </>
    )
}

export { Card }