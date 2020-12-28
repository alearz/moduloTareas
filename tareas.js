const fs = require('fs')

module.exports = {
    archivo: "./tareas.json",
    leerJSON : function(){
        let listaDeTareas = fs.readFileSync(this.archivo, 'utf-8'); //utf-8 codificacion para idioma latino
        return JSON.parse(listaDeTareas);

    },
    escribirJSON: function(titulo,estado){ // aca en la funcion escribirJSON guardamos la funcion leerJSON en la variable tareasAnteriores para utilizarla
        let nuevaTarea = {
            titulo: titulo, 
            estado: estado
        }
        let tareasAnteriores = this.leerJSON();
        tareasAnteriores.push(nuevaTarea);

        this.guardarJSON(tareasAnteriores);
    },
    guardarJSON: function(datos){
        let nuevoJSON = JSON.stringify(datos);
        fs.writeFileSync(this.archivo, nuevoJSON, 'utf-8');

    },
    deshacer: function(){ // recibe una funcion sin parametros
        let tareas = this.leerJSON(); // guardamos el contenido de json parceado
        tareas.pop(); // con tareas .pop eliminamos el ultimo elemento del conjunto 
        this.guardarJSON(tareas); // con una funcion guardarJSON le pasamos el parametro de la variable tareas, para que se guarde las modificaciones.
    },
    buscar: function(encontrado){ //creamos una funcion que recibe un parametro "encontrado"
        let listaDeTareas = this.leerJSON(); // creamos una nueva variable que lleva una funcion this.leerJSON
        let tareasFiltradas = listaDeTareas.filter(function(tareas){ // creamos una variable tareasFiltradas que va a contener el filtro de la busqueda.
            return tareas.titulo.toLowerCase().includes(encontrado.toLowerCase());
            

        });
        return tareasFiltradas;
    }

}

