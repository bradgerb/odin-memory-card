import { Card } from "./card"

const CardDisplay = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore, showLoss, setShowLoss, showWin, setShowWin, imageData, setImageData})=> {
    return(
        <>
            <Card
                url = {url}
                alt = {alt}
                id = {id}
                currentScore = { currentScore }
                setCurrentScore = { setCurrentScore }
                highScore = { highScore }
                setHighScore = { setHighScore }
                showLoss = { showLoss }
                setShowLoss = { setShowLoss }
                showWin = { showWin }
                setShowWin = { setShowWin }
                imageData = { imageData }
                setImageData = { setImageData }
            />
        </>
    )
}

export { CardDisplay }