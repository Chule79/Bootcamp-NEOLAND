//Iteración #1: Mix for e includes
    const movies = [
        {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
        {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
        {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
        {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
    ]
    const categorias= []

    for (const movie of movies) {
       for (const categori of movie.categories) {
        if (!categorias.includes(categori)) {
           categorias.push(categori)
         }
       }
    }
console.log(categorias);

//---------------------------------------------------------------------------------------------------------

//Iteración #2: Mix Fors

    const users = [
        {name: 'Manolo el del bombo',
            favoritesSounds: {
                waves: {format: 'mp3', volume: 50},
                rain: {format: 'ogg', volume: 60},
                firecamp: {format: 'mp3', volume: 80},
            }
        },
        {name: 'Mortadelo',
            favoritesSounds: {
                waves: {format: 'mp3', volume: 30},
                shower: {format: 'ogg', volume: 55},
                train: {format: 'mp3', volume: 60},
            }
        },
        {name: 'Super Lopez',
            favoritesSounds: {
                shower: {format: 'mp3', volume: 50},
                train: {format: 'ogg', volume: 60},
                firecamp: {format: 'mp3', volume: 80},
            }
        },
        {name: 'El culebra',
            favoritesSounds: {
                waves: {format: 'mp3', volume: 67},
                wind: {format: 'ogg', volume: 35},
                firecamp: {format: 'mp3', volume: 60},
            }
        },
    ]
    const favoriteSound = []
    let media = 0
    for (const user of users) {
        const {name, favoritesSounds} = user
        for (const sonido in user.favoritesSounds) {
            favoriteSound.push(user.favoritesSounds[sonido].volume)     
        }
    }
    for (let i = 0; i < favoriteSound.length; i++) {
        media += favoriteSound[i] / favoriteSound.length
        
    }
 console.log(`la media es ${media}`)


//---------------------------------------------------------------------------------------

//Iteración #3: Mix Fors

    const users2 = [
        {name: 'Manolo el del bombo',
            favoritesSounds: {
                waves: {format: 'mp3', volume: 50},
                rain: {format: 'ogg', volume: 60},
                firecamp: {format: 'mp3', volume: 80},
            }
        },
        {name: 'Mortadelo',
            favoritesSounds: {
                waves: {format: 'mp3', volume: 30},
                shower: {format: 'ogg', volume: 55},
                train: {format: 'mp3', volume: 60},
            }
        },
        {name: 'Super Lopez',
            favoritesSounds: {
                shower: {format: 'mp3', volume: 50},
                train: {format: 'ogg', volume: 60},
                firecamp: {format: 'mp3', volume: 80},
            }
        },
        {name: 'El culebra',
            favoritesSounds: {
                waves: {format: 'mp3', volume: 67},
                wind: {format: 'ogg', volume: 35},
                firecamp: {format: 'mp3', volume: 60},
            }
        },
    ]
    
    let conteo = []

    for (const user2 of users2) {
        for (const tipos2 in user2.favoritesSounds) {
            if (conteo.includes(tipos2)) {
                conteo.push(tipos2)                   
            }
            conteo[tipos2] = conteo[tipos2] + 1 || 1    
         }
     }
     console.log(conteo);

//-------------------------------------------------------------------------------------------------------------

//**Iteración #4: Métodos findArrayIndex**

    const findArrayIndex = (array, text) => {
        for (let i = 0; i < array.length; i++) {
            if(array[i] === (text)){
                 console.log(`Esta es la posicion en el Array ${i}`);
            } 
            
        }
    }
    findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],'Ajolote' )

//--------------------------------------------------------------------------------------------------------------

//Iteración #5: Función rollDice

    const rollDice = (caras) => {
        return Math.floor(Math.random() * caras)
    }
    console.log(rollDice(9))
   
//---------------------------------------------------------------------------------------------------------------

//Iteración #6: Función swap

    
 /*   let guardar = ""
    let posicion = 0
    let guardar2 = ""
    let posicion2 = 0
    const swap = (array2, par1, par2) => {
        for (let i = 0; i < array2.length; i++) {
            if (par1 == [i]) {
                guardar = array2[i]
                posicion = [i]   
            }
            for (let i = 0; i < array2.length; i++) {
                if (par2 == [i]) {
                    guardar2 = array2[i]
                    posicion2 = [i]   
                }  
            }
        }
        array2.splice(par1, par1, guardar); 
        console.log(array2);
    }
   
    
    console.log( swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 3));
  
   // array2.splice(par1, par1, guardar);*/