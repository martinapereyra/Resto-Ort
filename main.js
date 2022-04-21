
let mail = document.getElementById("mail"), 
    telefono = document.getElementById("telefono"), 
    nombre = document.getElementById("nombre"), 
    apellido = document.getElementById("apellido"),
    fecha = document.getElementById("fecha"), 
    hora = document.getElementById("hora"),
    enviar = document.getElementById("enviar"),
    form = document.getElementById("form"),
    inputs = document.getElementsByTagName('input');

const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function validarMail() {
    if(!regex.test(mail.value)){
        alert("Email inválido");  
    }
    
}

function validarTelefono(){
   if(isNaN(telefono.value)){
       alert("Telefono inválido");
   }
}

function validarVacio(){
    let i = 0;
    let inputValue = "";
    while(i < inputs.length && inputValue == ""){
        if(inputs[i].value.trim() == ""){
            inputValue = alert("Los campos no pueden estar vacíos")
        }
        i++;
    }
    return inputValue;
}
    

enviar.addEventListener("click", function(e){
    e.preventDefault();
    if(validarVacio() == ""){
        validarMail();
        validarTelefono();
    
  }

} )












