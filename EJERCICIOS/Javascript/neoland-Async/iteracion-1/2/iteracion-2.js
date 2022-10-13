//2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
//fetch() para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';







const getData = async (user) => {
    try {
        const dataConex = await fetch(`https://api.nationalize.io?name=${user}`) 
        const translateJson = await dataConex.json()
        return crearFrase(translateJson)
    } catch (error) {
        console.log(error);
    }
}



const buscar = () => {
    const boton = document.querySelector("#read")
    const user =  boton.addEventListener("click", () => {
            const valor = document.querySelector("#nombre").value
            getData(valor)
        } )
}
buscar()

//2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
//a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
//EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
//de MZ.

const crearFrase = (persona) => {
    console.log(persona);
    const zona = document.querySelector("#insertar")
    for (const nacion of persona.country) {
      const nombreP = persona.name
        zona.innerHTML += parrafo(nacion, nombreP)
        const listButton = document.querySelectorAll("#eliminar");
        listButton.forEach((boton) => {
        boton.addEventListener("click", () => {
        
        boton.previousSibling.remove() 
        boton.remove()
    })
    
})
}
}

const parrafo = (e, i) => {
     console.log(e, i);
     const caja =
    `<p>El nombre ${i} tiene un ${e.probability} porciento de ser de ${e.country_id} </p><button id="eliminar">X</button>
    `
    return caja
} 

//2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
//de los p que hayas insertado y que si el usuario hace click en este botón 
//eliminemos el parrafo asociado.

