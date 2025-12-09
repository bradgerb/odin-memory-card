const WinMenu = ({currentScore, setCurrentScore, setShowWin, newData, setNewData}) => {

    const handleClick = ()=> {
        setCurrentScore(0);
        setShowWin(false);
        setNewData(!newData);
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