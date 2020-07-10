(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-buttom");
        
    //Funciones

    var agregarTarea = function(){
        alert("agregarTarea");
    };
    var comprobarInput = function(){
        alert("comprobarInput");
    };
    var eleminarTarea = function(){
        alert("eleminarTarea");
    };



    //eventos

    //Agregar Tarea 

     btnNuevaTarea.addEventListener("click", agregarTarea);


    //comprobar Input
    tareaInput.addEventListener("click" , comprobarInput);


    //Borrando Elementos de la lista

    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea)   
    }
}());