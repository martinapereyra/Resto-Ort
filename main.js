
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

// Función para cambiar el formato de fecha del form.
    function formato(texto){
        return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
  }

function validarDia(){
    let f = new Date();
    let dia = `0${f.getDate()}`.slice(-2),
        mes = `0${f.getMonth() + 1}`.slice(-2),
        anio = f.getFullYear();
        
    let fechaActual = dia + "-" + mes + "-" + anio;

    if(formato(fecha.value) < fechaActual){
        alert(`La fecha debe ser: ${fechaActual} o mayor`);
 
    }else{
        return true;
    }
}

function validarHora(){
    console.log(hora.value);
    if(hora.value < "10:00" || hora.value > "23:00"){
        alert("La hora debe estar entre las: 10:00 y las 23:00");
 
    }else{
        return true;
    }
}
    

form.addEventListener("submit", function(e){
    if(!validarVacio() || !validarMail() || !validarTelefono() || !validarDia() || !validarHora()){
        e.preventDefault();
    }

} )












