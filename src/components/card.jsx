import { useState } from "react";

const Card = ({url, alt, id})=> {

    const [alreadySelected, setAlreadySelected] = useState(false);

    const handleClick = (e) => {
        let button = e.target
        setAlreadySelected(true);
        console.log(button.id);
        console.log(alreadySelected);
    }

    return (
        <>
            <button className="card" onClick={handleClick}>
                <img src={url} alt={alt} id={id} />
            </button>
        </>
    )
}

export { Card }