import { Card } from "./card"

const CardDisplay = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore, isShown, setIsShown, imageData, setImageData})=> {
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
                isShown = { isShown }
                setIsShown = { setIsShown }
                imageData = { imageData }
                setImageData = { setImageData }
            />
        </>
    )
}

export { CardDisplay }