
function isLogged(user) {
    if (user) {
        console.log("Bienvenido " + user );
    } if (typeof user !== "string") {
        console.log("Debes de tener un nombre")
    }else {
        console.log("Debes iniciar sesion");
    }
}

isLogged("Pepe")