function validarAcceso() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje-error');

    const usuarioCorrecto = "Harnouss";
    const passwordCorrecto = "Eddy";

    if (user === usuarioCorrecto && pass === passwordCorrecto) {
        window.location.href="vista principal de carros.html";
    } else {
        mensaje.innerText = "Usuario o contraseña incorrectos. Intenta de Nuevo"
    }

}