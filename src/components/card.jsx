import confetti from "canvas-confetti";

const Card = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore, showLoss, setShowLoss, showWin, setShowWin, imageData, setImageData, selectedIDs, setSelectedIDs})=> {
    
    const handleClick = (e) => {
        let button = e.target;

        if (checkGameEnded() === true) {
            return
        } else if (selectedIDs.includes(button.id)) {
            gameOver();
        } else if (currentScore === imageData.length - 1) {
            scoreUp();
            youWin();
        } else {
            setSelectedIDs([...selectedIDs, button.id]);
            scoreUp();
            setImageData(fisherYatesShuffle(imageData));
        }
    }

    function gameOver() {
        setSelectedIDs([]);
        setShowLoss(true);
    }

    function youWin() {
        setSelectedIDs([]);
        confetti();
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