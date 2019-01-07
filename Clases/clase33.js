const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
   console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then(function (character){
    console.log(`Hola yo soy ${character.name}`)
    return obtenerPersonaje(2)
})
.then(character => {
    console.log(`Hola yo soy ${character.name}`)
    return obtenerPersonaje(3)
})
.then(character => {
    console.log(`Hola yo soy ${character.name}`)
    return obtenerPersonaje(4)
})
.then(character => {
    console.log(`Hola yo soy ${character.name}`)
    return obtenerPersonaje(5)
})
.then(character => {
    console.log(`Hola yo soy ${character.name}`)
    return obtenerPersonaje(6)
})
.then(character => {
    console.log(`Hola yo soy ${character.name}`)
    return obtenerPersonaje(7)
})
.catch(onError)