class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn){        
        
        var {nombre, apellido} = this

        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){        
        /*var nombre = this.nombre
        var apellido = this.apellido*/
        var {nombre, apellido} = this

        console.log(`Hola me llamo ${nombre} ${apellido} soy desarrollador`)

        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log('Ah mirá, no sabía que eras desarollador/a')
    }
}

var sacha = new Persona('sacha', 'Lifszyc', 1.87)
var erika = new Persona('Erika', 'Ramirez', 1.70)
var arturo = new Desarrollador('Arturo', 'Ramirez', 1.72)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)