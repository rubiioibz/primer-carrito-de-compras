
//Log-in

// class User {
//     constructor(nombre, usuario, pass, email, edad){
//         this.nombre = nombre,
//         this.usuario = usuario,
//         this.pass = pass,
//         this.email = email,
//         this.edad = edad
//     }

//     mostrar(){
//         console.log( 'Nombre: ' + this.nombre);
//         console.log( 'Usuario: ' + this.usuario);
//         console.log( 'Contraseña: ' + this.pass);
//         console.log( 'E-mail: ' + this.email);
//         console.log( 'Edad: ' + this.edad);
//     }

//     logIn(userName, userPass){

//         this.usuario = prompt("Ingrese nombre de Usuario:");
//         this.pass = prompt("Ingrese contraseña:");

//         while((this.usuario != userName) || (this.pass != userPass)){

//             if(this.usuario === userName && this.pass === userPass){
//                 alert("Hola " + this.nombre.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
//             }
//             else if ((this.usuario != userName) && (this.pass != userPass)){
//                 alert("Usuario y contraseña incorrecto");
//             }
//             else if (this.usuario != userName){
//                 alert("Nombre de usuario incorrecto");
//             }
//             else if (this.pass != userPass){
//                 alert("Contraseña incorrecta");
//             }else{
//                 alert("ERROR")
//             };
        
//             this.usuario = prompt("Ingrese nombre de Usuario:");
//             this.pass = prompt("Ingrese contraseña:");
        
//         }
        
//         alert("Hola " + this.nombre.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
//     }
// }

// function usuarioNuevo(){
//     let usuario1 = new User (
//         prompt("Ingrese su nombre"),
//         prompt("Ingrese su usuario"),
//         prompt("Ingrese su password"),
//         prompt("Ingrese su email"),
//         Number(prompt("Ingrese su edad"))
//     )
// }


// let usuario2 = new User (
//     'cristina',
//     'cris',
//     '1313',
//     'lasabiote@gmail.com',
//     29
// )


// let saludo = prompt('Hola, eres nuevo aqui?')

// if (saludo == 'si'){
//     usuarioNuevo();
// }else if (saludo == 'no'){

//     let miembro = prompt('Asique ya eres miembro, quieres logearte?');
//     switch(miembro){
//         case 'si':
//             usuario2.logIn('cris', '1313');
//             break;
//         case 'no':
//             alert('Ok, hasta luego');
//             break;
//         default:
//             alert('No te entendi')
//             miembro = prompt('quieres logearte?');
//             if (miembro == 'si'){
//                 usuario2.logIn('cris', '1313');
//                 break;
//             }else if(miembro == 'no'){
//                 alert('Ok, hasta luego');
//                 break;
//             }else {
//                 while (miembro != 'no'){
//                     alert('No te entendi')
//                     miembro = prompt('quieres logearte?');
//                     if (miembro == 'si'){
//                         usuario2.logIn('cris', '1313');
//                         break;
//                     }else if (miembro == 'no'){
//                         alert('Ok, hasta luego');
//                         break;
//                     }
//                 }
//             }
//             break;
//         }
//     }else{
//         alert('No te entendi');
//         while (saludo != 'si'){
//             saludo = prompt('Hola, eres nuevo aqui?');
//         if (saludo == 'si'){
//             usuarioNuevo();
//         }else if (saludo == 'no'){
//             alert('Muy bien, escriba sus datos para ingresar:')
//             usuario2.logIn('cris', '1313');
//             break;
//         }
//     }
// }






//Log-in

class User {
    constructor(nombre, usuario, pass, email, edad){
        this.nombre = nombre,
        this.usuario = usuario,
        this.pass = pass,
        this.email = email,
        this.edad = edad
    }

    mostrar(){
        console.log( 'Nombre: ' + this.nombre);
        console.log( 'Usuario: ' + this.usuario);
        console.log( 'Contraseña: ' + this.pass);
        console.log( 'E-mail: ' + this.email);
        console.log( 'Edad: ' + this.edad);
    }

    logIn(userName, userPass){

        this.usuario = prompt("Ingrese nombre de Usuario:");
        this.pass = prompt("Ingrese contraseña:");

        while((this.usuario != userName) || (this.pass != userPass)){

            if(this.usuario === userName && this.pass === userPass){
                alert("Hola " + this.nombre.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
            }
            else if ((this.usuario != userName) && (this.pass != userPass)){
                alert("Usuario y contraseña incorrecto");
            }
            else if (this.usuario != userName){
                alert("Nombre de usuario incorrecto");
            }
            else if (this.pass != userPass){
                alert("Contraseña incorrecta");
            }else{
                alert("ERROR")
            };
        
            this.usuario = prompt("Ingrese nombre de Usuario:");
            this.pass = prompt("Ingrese contraseña:");
        
        }
        
        alert("Hola " + this.nombre.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
    }
}


//USUARIOS:
const usuarios = [];

usuarios.push ( new User (
    "cristina",
    "cris",
    "1313",
    "sabiote@gmail.com",
    29
))


function usuarioNuevo(){
    usuarios.push ( new User (
        prompt("Ingrese su nombre"),
        prompt("Ingrese su usuario"),
        prompt("Ingrese su password"),
        prompt("Ingrese su email"),
        Number(prompt("Ingrese su edad"))
        )
    )
}

function mostrarNombreUsuario() {
    for (const usuario of usuarios) {
        console.log("nombre de usuario: " + usuario.usuario)
    }
}





//SALUDO

let saludo = prompt('Hola, eres nuevo aqui?')


if (saludo == 'si'){
    usuarioNuevo();
    alert("FELICITACIONES!!! \nNuevo usuari@ creado correctamente \nBienvenid@");
    
}else if (saludo == 'no'){

    let miembro = prompt('Asique ya eres miembro, quieres logearte?');
    switch(miembro){
        case 'si':
            usuarios[0].logIn('cris', '1313');
            break;
        case 'no':
            alert('Ok, hasta luego');
            break;
        default:
            alert('No te entendi')
            miembro = prompt('quieres logearte?');
            if (miembro == 'si'){
                usuarios[0].logIn('cris', '1313');
                break;
            }else if(miembro == 'no'){
                alert('Ok, hasta luego');
                break;
            }else {
                while (miembro != 'no'){
                    alert('No te entendi')
                    miembro = prompt('quieres logearte?');
                    if (miembro == 'si'){
                        usuarios[0].logIn('cris', '1313');
                        break;
                    }else if (miembro == 'no'){
                        alert('Ok, hasta luego');
                        break;
                    }
                }
            }
            break;
        }
    }else{
        alert('No te entendi');
        while (saludo != 'si'){
            saludo = prompt('Hola, eres nuevo aqui?');
        if (saludo == 'si'){
            usuarioNuevo();
            alert("FELICITACIONES!!! \nNuevo usuari@ creado correctamente \nBienvenid@");
            
        }else if (saludo == 'no'){
            alert('Muy bien, escriba sus datos para ingresar:')
            usuarios[0].logIn('cris', '1313');
            break;
        }
    }
}


