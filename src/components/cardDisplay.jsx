import { Card } from "./card"

const CardDisplay = ({url, alt, id})=> {
    return(
        <>
            <Card
                url = {url}
                alt = {alt}
                id = {id}
            />
        </>
    )
}

export { CardDisplay }