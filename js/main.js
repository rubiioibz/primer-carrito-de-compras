//LOGIN

let user = "matias";
let pass = "mattera";

let userName = prompt("Ingrese nombre de Usuario:");
let userPass = prompt("Ingrese contraseña:");

while((user != userName) || (pass != userPass)){

    if(user === userName && pass === userPass){
        alert("Bienvenido al Sitio web de Matias Mattera");
    }
    else if ((user != userName) && (pass != userPass)){
        alert("Usuario y contraseña incorrecto");
    }
    else if (user != userName){
        alert("Nombre de usuario incorrecto");
    }
    else if (pass != userPass){
        alert("Contraseña incorrecta");
    }else{
        alert("ERROR");
    };

    userName = prompt("Ingrese nombre de Usuario:");
    userPass = prompt("Ingrese contraseña:");
}