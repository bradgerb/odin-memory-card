const Card = ({url, alt, id})=> {
    return (
        <>
            <button className="card">
                <img src={url} alt={alt} id={id} />
            </button>
        </>
    )
}

export { Card }