//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


const crearLista = (a) => {
const lista = document.createElement("ul")
document.body.appendChild(lista)
const meter = document.querySelector("ul")
const impri = (countri) => { 
    const lugar = `<li style="list-style: none;">${countri}</li>` 
    return lugar
}
    a.forEach(count => {
        console.log(count);
        meter.innerHTML += impri(count)
    });
}
crearLista(countries)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

    const eliminar = document.querySelector(".fn-remove-me")
    eliminar.remove()


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".

    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
    const insert = document.querySelector("div[data-function=printHere]")

    
    const crearLista2 = (a) => {
    const lista = document.createElement("ul")
    insert.appendChild(lista)
    const meter = document.querySelector("ul")
    const impri = (model) => { 
        const coche = `<li style="list-style: none;">${model}</li>` 
        return coche
    }
        a.forEach(count => {
            console.log(count);
            meter.innerHTML += impri(count)
        });
    }
    crearLista(cars)
    

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.

    const countriRandom = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];


    const listaRandom = (a) => {
        const lista = document.createElement("ul")
        document.body.appendChild(lista)
        const meter = document.querySelector("ul")
        const impriR = (countriR) => { 
            const lugarR = `<li style="list-style: none;"><div><h4>${countriR.title}</h4> <img src="${countriR.imgUrl}"></img></div></li>` 
            return lugarR
        }
            a.forEach(count => {
                meter.innerHTML += impriR(count)
            });
        }
        listaRandom(countriRandom)


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.
const borrarUlti = () => {
    const btn = document.createElement("button") 
    btn.setAttribute("id", "borrarUlti")
    document.body.appendChild(btn)
    

    const eventUltimo = () => {
        const cogerBtn = document.querySelector("#borrarUlti")
        const selec = document.querySelectorAll("div") 
        cogerBtn.addEventListener("click", () => {
          let efe =  selec.length -1
          console.log(efe);
          selec[efe].remove()
        })
    }
    eventUltimo()
    }
   
borrarUlti()
//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

const listas = document.querySelectorAll("li")
console.log(listas);
const eliminador = () => {return `<button id="eliminar">X</button>`}
const destructor = () => {
    listas.forEach((una) => {una.innerHTML += eliminador() } )

    const listButton = document.querySelectorAll("#eliminar");
        listButton.forEach((boton) => {
        boton.addEventListener("click", () => {
        
        boton.previousSibling.remove() 
        boton.remove()})
        })
    
}


destructor()