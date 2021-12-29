var persona = { nombre: "", edad: 0 };
function cambioNombre(input) {
    persona.nombre = input.value;
    mostrarPersona();
}
function cambioEdad(input) {
    persona.edad = parseInt(input.value);
    mostrarPersona();
}
function mostrarPersona() {
    document.getElementById("parrafoPersona").innerText = persona.nombre + " " + persona.edad;
}
