let limit = 20;
let offset = 0;
const div = document.querySelector(".lista_pokemon");

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



