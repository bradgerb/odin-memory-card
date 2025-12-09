const LossMenu = ({currentScore, setCurrentScore, setShowLoss}) => {

    const handleClick = ()=> {
        setCurrentScore(0);
        setShowLoss(false);
    }

    return (
        <>
            <h1>Game Over!</h1>
            <p>Your score: {currentScore}</p>
            <button className="gameOverButton" onClick={handleClick}>Retry?</button>
        </>
    )
}

export { LossMenu }