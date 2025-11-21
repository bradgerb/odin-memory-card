async function imageFetch() {
    const maxID = 151 //Gen 1
    const ids = new Set();

    while(ids.size < 10) {
        ids.add(Math.ceil(Math.random() * maxID))
    }

    const pokemon = await Promise.all(
        [...ids].map(async (id) => {
            
        })
    )

    console.log(ids)

    // https://pokeapi.co/api/v2/pokemon/1
}

export { imageFetch }