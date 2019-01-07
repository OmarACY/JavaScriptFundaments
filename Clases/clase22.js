function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;    
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8 // No va a checar la condicion por que this en Arrow function corresponden al contexto fuera de las llaves

var sacha = new Persona('sacha', 'Lifszyc', 1.87)
var erika = new Persona('Erika', 'Ramirez', 1.70)
var erika = new Persona('Erika', 'Ramirez', 1.72)

