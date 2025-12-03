// import { useState, useEffect } from "react";

// function ImageFetcher() {
    // const [imageData, setImageData] = useState([]);
    // useEffect(() => {
        async function imageFetch() {
            const maxID = 151 //Gen 1
            const ids = new Set();
            

            while(ids.size < 10) {
                ids.add(Math.ceil(Math.random() * maxID))
            }

            const pokemon = Promise.all(
                [...ids].map(async (id) => {
                    const response = await fetch(`https:pokeapi.co/api/v2/pokemon/${id}`);
                    const data = await response.json();
                    // console.log(data);
                    // await setImageData([...imageData, {data}]);
                    // await console.log(imageData);
                    return {
                        id: data.id,
                        name: data.name,
                        sprite: data.sprites.front_default
                    }
                })
            )
            return pokemon
        }

        // imageFetch(); 
    // }, [])

    // return { imageData }
// }

export { imageFetch }