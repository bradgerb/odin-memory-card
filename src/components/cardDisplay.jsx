import { Card } from "./card"

const CardDisplay = ()=> {
    return(
        <div className="cardContainer">
            <Card
                url = "toDo"
                alt = "Random Pokemon"
                id = "toDo"
            />
        </div>
    )
}

export { CardDisplay }