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

