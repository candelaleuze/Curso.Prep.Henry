// No cambies los nombres de las funciones.

function crearUsuario() {
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email; 
    this.password = opciones.password; 
  };
    Usuario.prototype.saludar = function() {
      return ("Hola, mi nombre es " + this.nombre); 
    }
    return Usuario;
  }

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function() {
     return "Hello World!"; 
  }
}

function agregarStringInvertida() {
  String.prototype.reverse = function() {
    var stringInvertida = []; 
    for (var i = 0; i < this.length ; i++){
      stringInvertida.unshift(this[i])
    }
        return stringInvertida.join ("");
      }
    }

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio,
        };
        this.detalle = function() {
      return {
        Nombre = this.nombre,
        Apellido = this.apellido,
        Edad = this.edad,
        Domicilio = this.domicilio,
      };
    }
  }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  return new Persona(nombre, apellido, edad, dir);
  }

  
function agregarMetodo() {
  Persona.prototype.datos = function(){
    return this.nombre + ", " + this.edad + " años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
