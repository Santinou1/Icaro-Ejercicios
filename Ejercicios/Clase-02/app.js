const usuario = {
  nombre: "Luis ",
  apellido: "Miguel",
  edad: 25,
  cursos: ["Javascript Basico", "Javascript Avanzado", "Html", "Css"],
};

const usuario1 = {
  nombre: "Santino ",
  apellido: "Ursino",
  edad: 25,
  cursos: ["Javascript Basico", "Javascript Avanzado", "Html", "Css"],
};

const usuario2 = {
  nombre: "Alejo ",
  apellido: "De Paris",
  edad: 25,
  cursos: [
    "Javascript Basico",
    "Javascript Avanzado",
    "Html",
    "Css",
    "Python",
    "Sql",
  ],
};
//Template Strings
// Utilizando las "comillas invertidas ``" podemos interactuar rapido con las variables cuando estamos dentro del string, utlizando el simbolo de pesos y abrir y cerrar llaves = "${}"
//Por ejemplo.
console.log(
  "CON STRINGS NORMALES= Mi nombre es " + usuario.nombre,
  " y mi apellido es " + usuario.apellido
);
console.log(
  `CON TEMPLATE STRINGS= Mi nombre es ${usuario.nombre} y mi apellido es ${usuario.apellido} `
);

//Ejercicio 1
//Acceder a las propiedades del Objeto
//Para acceder a las propiedades del objeto podemos utilizar, Dot Notation = ".".
//Por ejemplo
console.log(`Mi nombre es ${usuario.nombre}`);
console.log(
  `Mi nombre es ${usuario.nombre} y mi apellido es ${usuario.apellido}`
);

//Ejercicio 2
//Agregar una propiedad "Nacionalidad"al objeto usuario y darle un valor.

usuario.nacionalidad = "Argentina";

console.log(usuario);

//Ejercicio 3
//Cambiar el valor de edad del Objeto, por el de ustedes.

usuario.edad = 20;

console.log(usuario);

//Ejercicio 4
//Acceder al valor "Javascript Basico" del Objeto Usuarios.

console.log(usuario.cursos[0]);

//Ejercicio 5
//Modificar un elemento del array.

usuario.cursos[1] = "Node";

console.log(usuario);

//Ejercicio 6
//Agregar un metodo al objeto.
//El  metodo se va a llamar "nombreCompleto" y lo que va a hacer es que devuelva el nombre completo del usuario.

usuario.nombreCompleto = usuario.nombre + usuario.apellido;

//Ejercicio 7
//Obetener todos los cuross que hay. EN VALOR NUMERICO

function cantidadCursos(obj) {
  return obj.cursos.length;
}

console.log(cantidadCursos(usuario));
console.log(cantidadCursos(usuario2));

//Ejercicio 8
//Comprobar si existe una propiedad.
//Devolver true en caso de que exista, y devolver false en caso contrario.

function existePropiedad(obj) {
  return obj in usuario;
}

for (const property in usuario) {
  console.log(`${property}: ${usuario[property]}`);
}

//Ejercicio 9
//Buscar el nombre de una propiedad
//Crear una funcion que reciba 2 parametros, el objeto, y la propiedad que queremos buscar.

function buscarPorValor(objeto, valor) {
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave) && objeto[clave] === valor) {
      return clave;
    }
  }
  return null;
}

const usuario4 = {
  nombre: "Luis",
  apellido: "Miguel",
  edad: 25,
  cursos: ["Javascript Basico"],
};

const claveEncontrada = buscarPorValor(usuario4, "Luis");
console.log(claveEncontrada);

//NPM = Gestor de paquetes de Node
//JSON = Metodo de transportacion de datos
//NODE = Es un entorno de ejecucion que permite su dicha ejecucion en entornos que no sea el navegador, por ejemplo en la terminal de tu sistema operativo.

const datos = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(datos.userId);
