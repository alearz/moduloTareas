const process = require('process');

const modulosTareas = require('./tareas');// esto representa todo lo que esta en el archivo tareas y lo cambio de nombre a moduloTareas.

let consola = process.argv[2];

switch (consola) {
    case "listar": // lo que va en el case siempre va en comilla
    let tareas = modulosTareas.leerJSON(); // leerJSON es una funcion  y para ejecutarla tengo que poner parentesis con el ;
          if (tareas.length === 0) {
              console.log("la lista de tareas esta vacia");
              
          }else{
              console.log("este es tu listado de tareas");
          }
          for(let i = 0; i < tareas.length;i++){ // le indique a i que arranque en 0 y que recorra el archivo json,y que itere en incremento++.
              console.log(" TITULO DE LA TAREA : " + tareas[i].titulo + " ESTADO :" + tareas[i].estado); //
          }
          
        break;
        case "agregar":
            let nuevoTitulo = process.argv[3];
            let nuevoEstado = process.argv[4];


            modulosTareas.escribirJSON(nuevoTitulo, nuevoEstado);

        console.log("se a agregador con exito");
        break;
        case "deshacer":
           modulosTareas.deshacer();
        break;
        case "encontrado":
            let resultado = modulosTareas.buscar(process.argv[3])
            resultado.forEach(function(tareas){
                console.log(tareas)
            })



    default:
        break;
}

