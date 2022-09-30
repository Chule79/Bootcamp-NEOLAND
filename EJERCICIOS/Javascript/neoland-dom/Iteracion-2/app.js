const newDiv = document.createElement("div");

//----------------------------------------------------------------------------------------------------

for (let i = 0; i < 6; i++) {
const newP = document.createElement("p");
newDiv.appendChild(newP);
}


document.body.appendChild(newDiv);

//----------------------------------------------------------------------------------------------------

const newP2 = document.createElement("p");
const text1 = document.createTextNode('Soy dinámico!');

newP2.appendChild(text1);
document.body.appendChild(newP2);

console.log(newP2);

//----------------------------------------------------------------------------------------------------

const h2Select = document.querySelector("h2[class=fn-insert-here]");
const text2 = document.createTextNode('Wubba Lubba dub dub');

h2Select.appendChild(text2);

//----------------------------------------------------------------------------------------------------

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulCreate = document.createElement("ul")
for (const app of apps) {
    const liCreate = document.createElement("li");
    liCreate.innerHTML = `${app}`;
    ulCreate.appendChild(liCreate)
}
document.body.appendChild(ulCreate)

//----------------------------------------------------------------------------------------------------

const eliminar = document.querySelectorAll('.fn-remove-me');

for (const eliminado of eliminar) {
    eliminado.remove()
}

//-----------------------------------------------------------------------------------------------------

const entre = document.querySelectorAll("div")[1];
const pNew = document.createElement("p");

pNew.innerHTML = 'Voy en medio!'

document.body.insertBefore(pNew, entre)

//-----------------------------------------------------------------------------------------------------


const divInsets = document.querySelectorAll("div[class=fn-insert-here]")

for (const divInset of divInsets) {
    divInset.innerHTML = `<p>Voy dentro!</p>`
}