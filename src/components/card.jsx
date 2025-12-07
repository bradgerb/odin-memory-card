import { useState } from "react";

const Card = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore, isDisabled, setIsDisabled, isShown, setIsShown})=> {

    const [alreadySelected, setAlreadySelected] = useState(false);
    
    const handleClick = (e) => {
        // let button = e.target
        if (alreadySelected === false) {
            setAlreadySelected(true);
            scoreUp();
        } else {
            gameOver();
        }
            
        // console.log(button.id);
        // console.log(alreadySelected);
        
    }

    function gameOver() {
        setIsDisabled(true);
        setIsShown(true);
        console.log('gameOver', isShown);
    }

    function scoreUp() {
        setCurrentScore(currentScore + 1);
        if (currentScore >= highScore) {
            setHighScore(highScore + 1);
        }
    }

    return (
        <>
            <button className="card" onClick={handleClick} disabled={isDisabled}>
                <img src={url} alt={alt} id={id} />
            </button>
        </>
    )
}

export { Card }