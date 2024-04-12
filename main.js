function validarNombre(){
    let nombre=document.getElementById("nombre").value;
    console.log(nombre);
    let formato=/^[a-zA-Z]{3}$/;
    if(nombre==""){
        document.getElementById("errorNombre").style.display="block";
        document.getElementById("errorNombre").innerHTML="El Campo es Obligatorio";
    }
        
    else{if(!formato.test(nombre)){
        document.getElementById("errorNombre").style.display="block";
        document.getElementById("errorNombre").innerHTML="Ingrese caracteres válidos (solo letras)";
        }
        else{
            document.getElementById("errorNombre").style.display="none";
    }
}
}

function validarTelefono(){
    let telefono=document.getElementById("telefono").value;
    console.log(telefono);
    let formato=/^(3|6)\d{9}$/;
    if(telefono==""){
        document.getElementById("errorTelefono").style.display="block";
        document.getElementById("errorTelefono").innerHTML="El campo es obligatorio";
    }
    else{ if(!formato.test(telefono)){
        document.getElementById("errorTelefono").style.display="block";
        document.getElementById("errorTelefono").style.display="El Formato debe ser 3xx-xxxx-xxx"
    }
    else{
        document.getElementById("errorTelefono").style.display="none";
    }
    }
}
document.getElementById("nombre").addEventListener("blur",validarNombre);
document.getElementById("telefono").addEventListener("blur",validarTelefono);

function enviarFormulario(){
    console.log("Enviando formulario");
}
document.getElementById("btnEnviar").addEventListener("click",enviarFormulario);