// Objeto para almacenar usuarios y contraseñas
let usuarios = {};
// Funcion para registrar un nuevo usuario
function registrar() {
    const usuario = document.getElementById('usuarioRegistro').value; //Obtener el nombre de usuario del campo
    const contraseña = document.getElementById('contraseñaRegistro').value; //Obtener la contraseña del campo
    const mensaje = document.getElementById('mensajeRegistro'); //Elemento para mostrar mensajes
    //Verificar si el usuario ya existe
    if (usuario[usuario]) {
        mensaje.textContent = 'El usuario ya existe.'; //Mensaje de error si el usuario ya esta registrado
        mensaje.style.color = 'red'; //Cambiar el color del menasje a rojo
    }
    else {
        //Registrar el nuevo usuario
        usuarios[usuario] = contraseña; //Almacenar la contraseña del nuevo usuario
        mensaje.textContent = 'Registro exitoso.'; //Mensaje de exito
        mensaje.style.color = 'green'; //Cambiar el color del mensaje a verde
    }
}
//Funcion para iniciar sesion
function iniciarSesion() {
    const usuario = document.getElementById('usuarioLogin').value; //Obtener el nombre del usuario del campo
    const contraseña = document.getElementById('contraseñaLogin').value; //Obtener la contraseña del campo
    const mensaje = document.getElementById('mensajeLogin'); //Elemento para mostrar mensajes
    //Verificar si las credenciales son correctas
    if (usuarios[usuario] === contraseña) {
        mensaje.textContent = 'Autenticacion satisfactoria.'; //Mensaje de exito
        mensaje.style.color = 'green'; //Cambiar el color del mensaje a verde
    }
    else {
        mensaje.textContent.content = 'Error en la autenticacion.'; //Mensaje de error si las credenciales son incorrectas
        mensaje.style.color = 'red'; //Cambiar el color del mensaje a rojo 
    }
}