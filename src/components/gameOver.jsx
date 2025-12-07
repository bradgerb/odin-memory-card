const GameOverMenu = ({currentScore, setCurrentScore, setIsShown}) => {

    const handleClick = ()=> {
        setCurrentScore(0);
        setIsShown(false);
        console.log('retry');
    }

    return (
        <>
            <h1>Game Over!</h1>
            <p>Your score: {currentScore}</p>
            <button className="gameOverButton" onClick={handleClick}>Retry?</button>
        </>
    )
}

export { GameOverMenu }