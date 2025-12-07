import { useState } from "react";
import { Card } from "./card"

const CardDisplay = ({url, alt, id, currentScore, setCurrentScore, highScore, setHighScore})=> {
    const [isDisabled, setIsDisabled] = useState(false);
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
                isDisabled={ isDisabled }
                setIsDisabled={ setIsDisabled }
            />
        </>
    )
}

export { CardDisplay }