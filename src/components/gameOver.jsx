const GameOverMenu = ({currentScore}) => {
    return (
        <>
            <h1>Game Over!</h1>
            <p>Your score: {currentScore}</p>
            <button className="gameOverButton">Retry?</button>
        </>
    )
}

export { GameOverMenu }