function validarNombre(){
    let nombre=document.getElementById("nombre").value;
    console.log(nombre);
    let formato=/^[a-zA-Z]{3,}(?:[a-zA-Z]{3,})*$/
    if(nombre==""){
        document.getElementById("ErrorNombre").style.display="block";
        document.getElementById("ErrorNombre").innerHTML="El Campo es Obligatorio";
    }
        
    else{
        document.getElementById("ErrorNombre").style.display="none";
    }
}
document.getElementById("btnEnviar").addEventListener("click",validarNombre);

function validarApellido(){
    let nombre=document.getElementById("apellido").value;
    console.log(apellido);
    if(nombre==""){
        document.getElementById("ErrorApellido").style.display="block";
        document.getElementById("ErrorApellido").innerHTML="El Campo es Obligatorio";
    }
        
    else{
        document.getElementById("ErrorNombre").style.display="none";
    }
}
document.getElementById("btnEnviar").addEventListener("click",validarApellido);

function btnEnviar(){
    

    }
document.getElementById("saludo").innerHTML=buildGreeting;
