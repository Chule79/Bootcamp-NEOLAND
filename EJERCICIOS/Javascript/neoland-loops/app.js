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