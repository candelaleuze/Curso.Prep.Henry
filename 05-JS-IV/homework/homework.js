// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
     var gato = {
       nombre: nombre,
       edad: edad,
       meow: function() {
         return "Meow!";
       }
     };
     return gato;
}


function agregarPropiedad(objeto, property) {
    objeto[property]= null;
    return objeto;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
   delete objeto[unaPropiedad];
   return objeto;
}

function nuevoUsuario(nombre, email, password) {
  var persona = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return persona;
}

function tieneEmail(usuario) {
  if (usuario.email) {
  return true;
} else { 
  return false; 
};
}



function tienePropiedad(objeto, propiedad) {
  if (objeto[propiedad]) {
    return true;
  } else{ 
    return false; 
  }
  }


function verificarPassword(usuario, password) {
    if (usuario.password === password) {
      return true;
    } else { 
      return false; 
    }
    }  

function actualizarPassword(usuario, nuevaPassword) {
   usuario.password = nuevaPassword;
   return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  for (var i = 0; i < usuarios.length; i++) {
  usuarios[i].esPremium = true;
}
return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  var suma = 0;
  for ( var i= 0; i < usuario.posts.length; i++) {
    suma += usuario.posts[i].likes;
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  producto.calcularPrecioDescuento = function() {
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
}
return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
