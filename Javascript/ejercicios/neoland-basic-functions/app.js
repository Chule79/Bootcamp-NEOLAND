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
    let acumulado = 0
    function sumAll(param) {
        for (i = 0; i < param.length; i++){
            acumulado += param[i];
        }
        console.log(acumulado)
    }

    sumAll(numbers);

//--------------------------------------------------------------------------------------