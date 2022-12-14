// Iteración #1: Usa includes
    const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

    for (const product of products) {
        if (product.includes("Camiseta")) {
            console.log(product)
        }
    }

//--------------------------------------------------------------------------------------------------

//Iteración #2: Condicionales avanzados

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((alumns) => {
    if (alumns.T1 == true && alumns.T2 == true || alumns.T1 == true && alumns.T3 == true || alumns.T2 == true && alumns.T3 == true) {
            alumns.isApproved = true; 
    }else {alumns.isApproved = false;  }
});

console.log(alumns);

//------------------------------------------------------------------------------------------

//Iteración #3: Probando For...of

    const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

    for (const place of placesToTravel) {
        console.log(place);
    }

//--------------------------------------------------------------------------------------------

//Iteración #4: Probando For...in
    const alien = {
        name: 'Wormuck',
        race: 'Cucusumusu',
        planet: 'Eden',
        weight: '259kg'
    }

    for (const key in alien) {
       console.log(`${key}: ${alien[key]}`)
    }

//------------------------------------------------------------------------------------------------

//Iteración #5: Probando For

    const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
    const destinos = []
    for (let i = 0; i < placesToTravel2.length; i++) {
        if (placesToTravel2[i].id != 11 ) {
            if (placesToTravel2[i].id != 40) {
              destinos.push(placesToTravel2[i]) 
            } 
        } 
    }

console.log(destinos)

//------------------------------------------------------------------------------------------------------

//Iteración #6: Mixed For...of e includes

    const toys = [
        {id: 5, name: 'Buzz MyYear'}, 
        {id: 11, name: 'Action Woman'}, 
        {id: 23, name: 'Barbie Man'}, 
        {id: 40, name: 'El gato con Guantes'},
        {id: 40, name: 'El gato felix'}
        ]

    for (const toy of toys) {
        if (toy.name.includes("gato")){
            toys.splice(toys.indexOf(toy))
        }
    }
    console.log(toys);

//--------------------------------------------------------------------------------------------------------

//Iteración #7: For...of avanzado
    const popularToys = [];
    const toys2 = [
        {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
        {id: 11, name: 'Action Woman', sellCount: 24}, 
        {id: 23, name: 'Barbie Man', sellCount: 15}, 
        {id: 40, name: 'El gato con Guantes', sellCount: 8},
        {id: 40, name: 'El gato felix', sellCount: 35}
    ]

    for (const toy2 of toys2) {
        if (toy2.sellCount >= 15) {
            popularToys.push(toy2)
        }
    }

    console.log(popularToys);