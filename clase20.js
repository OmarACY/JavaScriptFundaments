var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}


const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => !esAlta({altura})

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

/*var personasAltas = personas.filter(function(persona){
    return persona.altura > 1.8
})*/

const pasarAlturaACms = persona => ({
    ...persona,
    altura : persona.altura * 100
})

/*return {
        ...persona,
        altura : persona.altura * 100
    }
}*/

var personasCms = personas.map(pasarAlturaACms)

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

/*const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}*/

var totalDeLibros = personas.reduce(reducer, 0)

console.log('Total de libros:')
console.log(totalDeLibros)