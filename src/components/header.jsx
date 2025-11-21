const Header = ({currentScore, highScore})=> {
    return (
        <>
            <h1>Pokemon Memory Game</h1>
            <h2>Click the Pokemon you haven't already selected</h2>

            <div className="scores">
                <div className="current">
                    Current Score: {currentScore}
                </div>
                <div className="high">
                    High Score: {highScore}
                </div>
            </div>
        </>
    )
}

export { Header }