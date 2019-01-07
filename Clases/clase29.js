const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onCharacterResponse = function (character){
    console.log(`Hola yo soy ${character.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onCharacterResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

