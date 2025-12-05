async function imageFetch() {
    const maxID = 151 //Gen 1
    const ids = new Set();
    const shinyOdds = 5;
    
    while(ids.size < 10) {
        ids.add(Math.ceil(Math.random() * maxID))
    }

    const pokemon = Promise.all(
        [...ids].map(async (id) => {
            const response = await fetch(`https:pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            const random = Math.ceil(Math.random() * 100);
            let sprite;

            if (random >= shinyOdds) {
                sprite = data.sprites.front_default;
            } else {
                sprite = data.sprites.front_shiny;
            }

            return {
                id: data.id,
                name: data.name,
                sprite: sprite
            }
        })
    )
    return pokemon
}

export { imageFetch }