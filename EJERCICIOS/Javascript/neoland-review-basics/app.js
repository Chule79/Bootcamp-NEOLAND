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
//NO SALE
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