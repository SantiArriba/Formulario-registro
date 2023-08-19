document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const contrasena = document.getElementById("contrasena").value;

        const registro = {
            Nombre: nombre,
            "Correo Electrónico": email,
            Contraseña: contrasena,
        };

        console.log("Registro guardado en la consola:");
        console.log(registro);

        // Puedes enviar los datos a un servidor aquí en lugar de solo imprimirlos en la consola.
    });
});

