const WinMenu = ({currentScore, setCurrentScore, setShowWin}) => {

    const handleClick = ()=> {
        setCurrentScore(0);
        setShowWin(false);
    }

    return (
        <>
            <h1>You Win!</h1>
            <p>Your score: {currentScore}</p>
            <button className="gameOverButton" onClick={handleClick}>Play Again?</button>
        </>
    )
}

export { WinMenu }