var codigo= document.getElementById("codigo");
var titulo= document.getElementById("titulo");
var autor= document.getElementById("autor");
var editorial= document.getElementById("editorial");
var fecha_p = document.getElementById("fecha_p");
var fecha_i = document.getElementById("fecha_i");
var error = document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
    console.log("Enviando...")

    var mensajesError=[];
    if(codigo.value==null || codigo.value=="" ){

        mensajesError.push("Ingrese el código");

    }
    if(titulo.value==null || titulo.value=="" ){

        mensajesError.push("Ingrese el título");

    }

    if(autor.value==null ||  autor.value=="" ){

        mensajesError.push("Ingrese el autor");

    }
    if(editorial.value==null ||  editorial.value=="" ){

        mensajesError.push("Ingrese la editorial");

    }
    if(fecha_p.value==null ||  fecha_p.value=="" ){

        mensajesError.push("Ingrese la fecha de publicación");

    }
    if(fecha_i.value==null ||  fecha_i.value=="" ){

        mensajesError.push("Ingrese la fecha de ingreso ");

    }
    error.innerHTML= mensajesError.join(",");
    

    return false;
}