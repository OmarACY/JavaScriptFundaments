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

obtenerPersonaje(1)
.then(function (character){
    console.log(`Hola yo soy ${character.name}`)
})
.catch(function(id){
    console.log(`Hola yo soy ${character.name}`)
})

obtenerPersonaje(1, function (character){
    console.log(`Hola yo soy ${character.name}`)
})