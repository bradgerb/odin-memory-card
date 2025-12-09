import { useState } from "react";

const Card = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore, showLoss, setShowLoss, showWin, setShowWin, imageData, setImageData})=> {

    const [alreadySelected, setAlreadySelected] = useState(false);
    
    const handleClick = () => {
        if (checkGameEnded() === true) {
            return
        } else if (alreadySelected === true) {
            gameOver();
        } else if (currentScore === imageData.length - 1) {
            scoreUp();
            youWin();
        } else {
            setAlreadySelected(true);
            scoreUp();
            setImageData(fisherYatesShuffle(imageData));
        }
    }

    function gameOver() {
        setShowLoss(true);
    }

    function youWin() {
        setShowWin(true);
    }

    function checkGameEnded() {
        let output = false;
        if (showLoss === true || showWin === true) {
            output = true;
        }
        return output
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