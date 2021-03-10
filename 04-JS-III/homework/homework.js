// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array [0];
}


function devolverUltimoElemento(array) {
  return array [array.length - 1];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  var nuevoArray = [];
    for (var i = 0; i < array.length; i++) {
      nuevoArray [i] = array[i] + 1;
     }
      return nuevoArray;
    }


function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array 
}


function dePalabrasAFrase(palabras) {
  var frase = palabras [0] 
  for(var i = 1; i < palabras.length; i++) {
    frase = frase + " " + palabras[i] 
  }
  return frase
  }



function arrayContiene(array, elemento) {
  for(var i = 0; i < array.length; i++) {
    if(array [i] === elemento) {
      return true;
      }
    } 
       return false;
  }


function agregarNumeros(numeros) {
  var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
    return suma;
 }


function promedioResultadosTest(resultadosTest) {
  var suma = resultadosTest[0] 
  for (var i = 1; i < resultadosTest.length; i++) {
    suma += resultadosTest[i] 
  }
    return suma / resultadosTest.length 
  }



function numeroMasGrande(numeros) {
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) { 
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
    return maximo; 
  }


function multiplicarArgumentos() {
  if (arguments.length === 1) return arguments[0]
  else if (!arguments.length) return 0 
  var producto = arguments[0] 
  for (var i = 1; i < arguments.length; i++) { 
  producto *= arguments [i]
}
return producto 
} 


function cuentoElementos(arreglo){
var cantidad = 0
for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 19) { 
    cantidad++ 
  }
}
return cantidad 
}


function diaDeLaSemana(numeroDeDia) {  
  if (numeroDeDia === 1 ||numeroDeDia === 7) return "Es fin de semana" 
    return "Es dia Laboral" 
} 


function empiezaConNueve(n) {
  var str = n.toString() 
  if (str[0] === "9") return true 
  return false 
}


function todosIguales(arreglo) {
  var comparar = arreglo[0]
  for (var i = 1; i < arreglo.length; i++) {
  if (comparar !== arreglo[i]) {
    return false 
  }
} 
return true 
}


function mesesDelAño(array) {
    var nuevoArray = []
     for (var i = 0; i < array.length; i++) {
      if (array [i] === "Enero" || array [i] === "Marzo" || array [i] === "Noviembre") {
        nuevoArray.push(array[i])
        } 
      }
      if (nuevoArray.length === 3) {
        return nuevoArray 
      }
      return "No se encontraron los meses pedidos" 
  }



function mayorACien(array) {
  var nuevoArray = []
  for (var i = 0; i < array.length; i++) { 
    if(array[i] > 100) {
      nuevoArray.push(array[i]) 
    }
  }
  return nuevoArray 
}


function breakStatement(numero) {
  var nuevoArray = []
     for (var i = 0; i < 10; i++) { 
       numero += 2 
        nuevoArray.push(numero) 
         if (numero === i) {
           break
         }
  }
       if (numero === i){
         return "Se interrumpió la ejecución"
       }
       return nuevoArray
}


function continueStatement(numero) {
  var array = [];
  var suma = numero; 
  for (var i=0; i <10; i++) { 
    if(i === 5) continue;
    else { 
      suma = suma + 2;   
      array.push(suma);
    }
  }
          return array;
   }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
