const Card = ({url, alt, id})=> {

    const handleClick = (e) => {
        let button = e.target
        console.log(button.id);
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