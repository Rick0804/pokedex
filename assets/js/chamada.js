//quantos pokemons vão aparecer 
//qual pack vai aparecer

const pokeApi = {};

pokeApi.chamadaApi = (limit, offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => new Error("erro de requisição" + error.status))
}

pokeApi.pokeType = (name) => {
    const urlNome = `https://pokeapi.co/api/v2/pokemon/${name}/`
    return fetch(urlNome)
        .then((response) => response.json())
        .catch((error) => new Error("erro de requisição " + error));
}

creatElementList = () => {
    let li = document.createElement('li');
    return li;
}


adicionaElement = (name, type, img, ability) => {
    const li = creatElementList();
    div.appendChild(li);
    li.classList.add('poke')
    switch (type) {
        case 'grass':
            li.classList.add("grass")
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'bug':
            li.classList.add('bug')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'dark':
            li.classList.add('dark')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'water':
            li.classList.add('water')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'dragon':
            li.classList.add('dragon')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'electric':
            li.classList.add('electric')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'fairy':
            li.classList.add('fairy')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'ghost':
            li.classList.add('ghost')
            li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`;
            break;
        case 'fighting':
            li.classList.add('fighting')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'fire':
            li.classList.add('fire')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'ice':
            li.classList.add('ice')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'poison':
            li.classList.add('poison')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'flying':
            li.classList.add('flying')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'normal':
            li.classList.add('normal')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'ground':

            li.classList.add('ground')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'steel':
            li.classList.add('steel')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'psychic':
            li.classList.add('psychic')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        case 'rock':
            li.classList.add('rock')
            li.innerHTML = li.innerHTML = `<div class="chars">
                                <p>${name[0].toUpperCase() + name.substring(1)}</p>
                                <p>${type.toUpperCase()}</p>
                                <p>${ability.toUpperCase()}</p>
                            </div>    
                <img src="${img}" alt="" srcset="">`
            break;
        default: li.innerHTML = name + " " + type + " " + img;;
    }
}