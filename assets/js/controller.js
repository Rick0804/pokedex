let limit = 20;
let offset = 0;
const div = document.querySelector(".lista_pokemon");

/*
para pegar o tipo do pokemon é results.types[0].type.name
para pegar a imagem do pokemon é results.sprites.front_default
para pegar gif results.sprites.other.showdown.front_default
*/



document.querySelector(".btn").addEventListener('click', () => {
    pokeApi.chamadaApi(limit, offset).then((response) => {
        response.results.forEach(pokemon => {
            pokeApi.pokeType(pokemon.name)
                .then((results) => {
                    const img = results.sprites.other.showdown.front_default;
                    const type = results.types[0].type.name;
                    const ability = results.abilities[0].ability.name;
                    adicionaElement(pokemon.name, type, img, ability)
                    console.log(results.sprites.other.showdown.front_default)
                });
        });

    });
    offset += limit;
})



