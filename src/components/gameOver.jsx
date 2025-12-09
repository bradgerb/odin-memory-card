const LossMenu = ({currentScore, setCurrentScore, setShowLoss, newData, setNewData}) => {

    const handleClick = ()=> {
        setCurrentScore(0);
        setShowLoss(false);
        setNewData(!newData);
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