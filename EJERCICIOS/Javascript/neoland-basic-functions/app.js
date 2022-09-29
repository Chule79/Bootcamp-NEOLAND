//Iteración #1: Buscar el máximo  
   function sum(numberOne , numberTwo) {
        if (numberOne > numberTwo){
            console.log(numberOne);
        } else {console.log(numberTwo);}
    }

    sum(12, 57);

//------------------------------------------------------------------------------

//Iteración #2: Buscar la palabra más larga
    const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
    let longWord = "";
    function findLongestWord(param) {
      for (i = 0; i < param.length; i++){
        if(longWord.length < param[i].length){
            longWord = param[i];
        }
      }
        console.log(longWord);
    }

    findLongestWord(avengers);

//------------------------------------------------------------------------------------

//Iteración #3: Calcular la suma

    const numbers = [1, 2, 3, 5, 45, 37, 58];
    let acumulado = 0;
    function sumAll(param) {
        for (i = 0; i < param.length; i++){
            acumulado += param[i];
        }
        console.log(`Esta es la suma ${acumulado}`);
    }

    sumAll(numbers);

//--------------------------------------------------------------------------------------

//Iteración #4: Calcular el promedio

    const numbers1 = [12, 21, 38, 5, 45, 37, 6];
    let total = 0;
    let media = 0;
    function average(param) {
        for (i = 0; i < param.length; i++){
            total += param[i];
            media = total / param.length;
        }
        console.log(`Esta es la media ${media}`);
    }
    average(numbers1);

//-----------------------------------------------------------------------------------------

//Iteración #5: Calcular promedio de strings

    const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
    let totalString = 0;
    let totalNumber = 0;
    function averageWord(param) {
        for (i = 0; i < param.length; i++){
            if(typeof param[i] == "string"){

               totalString += param[i].length
            } else { totalNumber += param[i]}
        }
    console.log(`Este es el total de Letras ${totalString}`);
    console.log(`Este es el total de Numeros ${totalNumber}`);
    }

    averageWord(mixedElements);

//-------------------------------------------------------------------------------------------

//Iteración #6: Valores únicos
    
    const duplicates = [
        'sushi',
        'pizza',
        'burger',
        'potatoe',
        'pasta',
        'ice-cream',
        'pizza',
        'chicken',
        'onion rings',
        'pasta',
        'soda'
    ];

    function removeDuplicates(param) {
    const arrayDuplicados = []

        for (i = 0; i < param.length; i++){
          if(!arrayDuplicados.includes(param[i])){arrayDuplicados.push(param[i])}
        }
        console.log(arrayDuplicados);
    }
    removeDuplicates(duplicates)

//------------------------------------------------------------------------------------------------

//Iteración #7: Buscador de nombres
    const nameFinder = [
        'Peter',
        'Steve',
        'Tony',
        'Natasha',
        'Clint',
        'Logan',
        'Xabier',
        'Bruce',
        'Peggy',
        'Jessica',
        'Marc'
    ];
    
    function finderName(param, buscar) {
       let esta = param.includes(buscar);
       let posicion = param.indexOf(buscar);

       if (esta) {
        return `True ${posicion}`
       } else{
        return `False`
       }
    }

console.log(finderName(nameFinder, "Tony"));

//-------------------------------------------------------------------------------------------------

//Iteration #8: Contador de repeticiones
    const counterWords = [
        'code',
        'repeat',
        'eat',
        'sleep',
        'code',
        'enjoy',
        'sleep',
        'code',
        'enjoy',
        'upgrade',
        'code'
    ];

    const cuentas = []
    function repeatCounter(param) {
        for (const word of param) {
            cuentas[word] = cuentas[word] + 1 || 1 
        }
        console.log(cuentas)
    }

    repeatCounter(counterWords)

 