
let mail = document.getElementById("mail"), 
    telefono = document.getElementById("telefono"), 
    nombre = document.getElementById("nombre"), 
    apellido = document.getElementById("apellido"),
    fecha = document.getElementById("fecha"), 
    hora = document.getElementById("hora"),
    enviar = document.getElementById("enviar"),
    form = document.getElementById("form"),
    inputs = document.getElementsByTagName('input');



function validarMail() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(mail.value)){
        alert("Email inválido");  
    }else{
        return true;
    }
    
}

function validarTelefono(){
   if(isNaN(telefono.value)){
       alert("Telefono inválido");
   }else{
       return true;
   }
}

function validarVacio(){
    let i = 0;
    let inputValue = true;
    while(i < inputs.length && inputValue == true){
        if(inputs[i].value.trim() == ""){
            inputValue = alert("Los campos no pueden estar vacíos")
        }
        i++;
    }
    return inputValue;
}
    

form.addEventListener("submit", function(e){
    if(validarVacio() && validarMail() && validarTelefono() ){
        alert("Enviado Form...")
    }else{
    e.preventDefault();
    
  }

  

} )












