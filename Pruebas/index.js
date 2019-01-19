///////////////////////////////////////// Prototipos ///////////////////////////////////////
// Cuando se definen los metodos en la clase cada objeto o instancia cuenta con los atributos y los métodos definidos en la clase.
// Los objetos generados por prototipos tiene atributos y metodos que estan definidos en la clase pero los atributos y los metodos especificados
// en el prototipo se comparten entre las direfentes instancias. De esta manera se ocupa menos memoria al momento de contar con varias instancias dentro de un documento
// que utilice el script.
//////////////////////////////////////////////////////////////////////////////////////////
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    this.saludar2 = function (saludo){
        console.log(`${saludo} me llamo ${this.nombre} ${this.apellido}`)
    }

    this.saludar3 = saludar3;

    function saludar3(){
        console.log(`Hello my name is ${this.nombre} ${this.apellido}`)
    }
}

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () { 
    return this.altura > 1.8
}

var omar = new Persona('Omar', 'Cervantes', 1.87)
var lee = new Persona('Lee', 'Laa', 1.70)
var laa = new Persona('Laa', 'Lee', 1.72)

omar.saludar();
lee.saludar2("Que onda");
laa.saludar3();

console.log(Object.keys(omar));
console.log(Object.keys(omar['__proto__']));

///////////////////////////////////////// Extender ///////////////////////////////////////
// No se puede sobreescribir metodos que no esten en prototipos
// Con prototipos se pueden extender las clases
/////////////////////////////////////////////////////////////////////////////////////////
Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} Modificado`)
}
// Este metodo no se sobreescribe
Persona.prototype.saludar3 = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} Modificado`)
}
Persona.prototype.saludar4 = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} Modificado`)
}