// Função para obter os tipos de um Pokémon
async function getPokemonTypes(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(data.message || 'Erro ao buscar Pokémon');
        }
        
        // Extrai os tipos do Pokémon
        const types = data.types.map(type => type.type.name);
        
        return types;
    } catch (error) {
        console.error('Erro ao obter tipos de Pokémon:', error);
        return null;
    }
}

// Exemplo de uso
const pokemonName = 'pikachu'; // Nome do Pokémon desejado
getPokemonTypes(pokemonName)
    .then(types => {
        if (types) {
            console.log(`Os tipos do Pokémon ${pokemonName} são: ${types.join(', ')}`);
        } else {
            console.log('Não foi possível obter os tipos do Pokémon.');
        }
    })
    .catch(error => console.error('Erro:', error));






/*
// Função para obter informações de Pokémon a partir de uma URL
function getPokemonFromUrl(url) {
    fetch(url)
        .then(response => {
            // Verifica se a requisição foi bem-sucedida
            if (!response.ok) {
                throw new Error(`Erro ao buscar informações dos Pokémon.`);
            }
            // Se sim, converte a resposta para JSON
            return response.json();
        })
        .then(pokemonData => {
            // Manipula os dados dos Pokémon
            pokemonData.results.forEach(pokemon => {
                console.log("Nome:", pokemon.name);
                console.log("URL:", pokemon.url);
            });

            // Se houver próxima página, obtenha mais Pokémon
            if (pokemonData.next) {
                getPokemonFromUrl(pokemonData.next);
            }
        })
        .catch(error => {
            // Captura e trata erros
            console.error("Ocorreu um erro:", error);
        });
}

// URL da requisição
const url = `https://pokeapi.co/api/v2/pokemon/?limit=2&offset=20`;

// Chamada da função com a URL fornecida
getPokemonFromUrl(url);
*/    