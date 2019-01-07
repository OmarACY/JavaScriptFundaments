function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;    
}

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () { 
    return this.altura > 1.8
}

var sacha = new Persona('sacha', 'Lifszyc', 1.87)
var erika = new Persona('Erika', 'Ramirez', 1.70)
var arturo = new Persona('Arturo', 'Ramirez', 1.72)

sacha.soyAlto();