const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }

const onCharacterResponse = function (character){
    console.log(`Hola yo soy ${character.name}`)
}

$.get(lukeUrl, opts, onCharacterResponse)

