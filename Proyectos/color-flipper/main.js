import './style.css';



const Colores = {
  '#071e22':'Dark Jungle Green',
  '#1d7874':'Myrtle Green',
  '#679289':'Wintergreen Dream',
  '#f4c095':'Peach Crayola',
 '#ee2e31':'Red Pigment'
}




const usarColores = () => {
  const colorSeleccionado = document.querySelector("#color-picker")

  Object.keys(Colores).forEach((color) => {
    const seleccione = document.createElement("option");
    seleccione.value = color;
    seleccione.innerText = Colores[color];

    colorSeleccionado.append(seleccione)
    
  });
}



const addEventListenerToColorPicker = () => {
  const colorSeleccionado = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");

  colorSeleccionado.addEventListener("change", (event) => {
    const newColor = event.target.value;
    console.log(event.target.value);
    //TARGET especifica el elemnto exacto que genera el evento 
    document.body.style.backgroundColor = newColor;
    colorName.innerText = Colores[newColor];
  });
};

usarColores();
addEventListenerToColorPicker();