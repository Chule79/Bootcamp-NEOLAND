const btn = document.querySelector('#btnToClick');
const foc = document.querySelector('.focus');
const inp = document.querySelector('.value')

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

btn.addEventListener("click", () => {console.log("has echo click")});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

foc.addEventListener("focus", () => {console.log(foc.value)});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input

inp.addEventListener("input", () => {console.log(inp.value);})


