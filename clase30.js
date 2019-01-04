const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function (character){
        console.log(`Hola yo soy ${character.name}`)
    })
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

