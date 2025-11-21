const Card = (url, alt, id)=> {
    return (
        <>
            <button className="card">
                <img src={url} alt={alt} id={id} />
            </button>
        </>
        // <>
        //     <div className='cardContainer'>
        //         <div className="card">card 1</div>
        //         <div className="card">card 2</div>
        //         <div className="card">card 3</div>
        //         <div className="card">card 4</div>
        //         <div className="card">card 5</div>
        //         <div className="card">card 6</div>
        //         <div className="card">card 7</div>
        //         <div className="card">card 8</div>
        //         <div className="card">card 9</div>
        //         <div className="card">card 10</div>
        //     </div>
        // </>
    )
}

export { Card }