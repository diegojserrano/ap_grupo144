let persona = { nombre: "", edad: 0 }


function cambioNombre(input: HTMLInputElement): void {
    persona.nombre = input.value
    mostrarPersona()
}

function cambioEdad(input: HTMLInputElement): void {
    persona.edad = parseInt(input.value)
    mostrarPersona()
}

function mostrarPersona(): void {
    document.getElementById("parrafoPersona").innerText = persona.nombre + " " + persona.edad
}