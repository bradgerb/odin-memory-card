import { Card } from "./card"

const CardDisplay = ({url, alt, id})=> {
    console.log(url, alt, id);
    return(
        <div className="cardContainer">
            <Card
                url = {url}
                alt = {alt}
                id = {id}
            />
        </div>
    )
}

export { CardDisplay }