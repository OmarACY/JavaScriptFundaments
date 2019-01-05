const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, callback)
    .fail(function (){
        console.log(`Sucedió un error. No se puedo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (character){
    console.log(`Hola yo soy ${character.name}`)

    obtenerPersonaje(2, function(character){
        console.log(`Hola yo soy ${character.name}`)

        obtenerPersonaje(3, function(character){
            console.log(`Hola yo soy ${character.name}`)

            obtenerPersonaje(4, function(character){
                console.log(`Hola yo soy ${character.name}`)
            })
        })
    })
})