//de objeto a JSON "stringify"
//de JSON a objeto "parse"
//Esto es un objeto normal en JS
//puede tener dentro otro objeto, array, numeros, string y booleanos
//Ojo..JSON no recibe funciones y el objeto JS si
const user = {
    "name": "Nicolas", 
    "surname": "Melgar",
    "age": 43,
    "married": false, 
    "hoby": ["read", "sleep", "code"],
    "adress": {
        "street": "Callejon Werner",
        "town": "El Bolsón",
        "state": "Rio negro"
    }
}
console.log(user)

//Para pasarlo a JSON se usa (JSON.stringify)
const userJson = JSON.stringify(user)
console.log(userJson)

//Para mostrarlo en pantalla
document.getElementById("datos")
//creo un elemento en html
let divPruebaJSON = `<h2 style="color: red">${userJson}</h2>`;
//le asigno el teto que deseo
//divPruebaJSON.innerText = `<h2>${userJson}</h2>`;
//lo muestro en el html. nótese que el nombre de la const va ()
document.getElementById("datos").innerHTML = divPruebaJSON;

//Para mostrarlo en pantalla de forma diferente...está último!
//creo un elemento en html
const divPruebaJS = document.createElement("div");
//le asigno el teto que deseo
divPruebaJS.innerText = `${user} "Age:" ${user.age} "Name:" ${user.name}`;
//lo muestro en el html. nótese que el nombre de la const va ()
document.body.append(divPruebaJS);


//Un arreglo dentro de un objeto
const amigos = [
    {
        "name": "pepe",
        "nickname": "pepe123"
    },
    {
        "name": "toto",
        "nickname": "toto123"
    },
    {
        "name": "tata",
        "nickname": "tata123"
    }
]

console.log(JSON.stringify(amigos))

//const amigosJSON = JSON.stringify(amigos)
//El JSON no me deja tomar un elemento del arreglo?
console.log(amigos[0])
//Básicamente lo puedo tomar así
console.log(JSON.stringify(amigos[2]))

//Si le quiero agregar la propiedad amigos a user
user.amigos = amigos
//Lo convierto a JSON de nuevo y a user se suma amigos
console.log(JSON.stringify(user))



//Para mostrar por ejemplo los amigos en una lista
const amigosLi = document.getElementById("amigos")

//Creo un string vacío para guardar la lista
let amigo = "";
for (let index = 0; index < amigos.length; index++) {
    amigo = amigo + `<li>${amigos[index].name}</li>`;
}
//Ahora pongo la variable dentro de amigosLi
amigosLi.innerHTML = amigo;

//Me parece que puede ser más corto así y el resultado es igual
let amigoB = "";
for (let index = 0; index < amigos.length; index++) {
    amigoB = amigoB + `<li>${amigos[index].name}</li>`;
}
document.getElementById("amigos2").innerHTML = amigoB;

//PETICIONES CON FETCH    

document.getElementById("jphTodo")
    let jphTodo = "";
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {
        for (let index = 0; index < json.length; index++) {
            jphTodo += `<li>${ json[index]}</li>` ;  
        }
        document.getElementById("jphTodo").innerHTML = jphTodo;
    })

//Así está bien llamado pero sin convertir...se ve todo objet objet

let miUser = "";
document.getElementById("fetchUser")
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    
    .then(data => {
        for (let index = 0; index < data.length; index++) {
            //console.log(data)
            miUser += `<h2>${data[index].name}</h2>` ;
            
        }
        document.getElementById("fetchUser").innerHTML = miUser;
    })


//Se puede llamar usando un servidor local (aunque sería un 8080 en todo caso)
fetch('http://127.0.0.1:5500/user.json')
    .then(response => response.json())
    .then(data => {console.log(data)})
//Se puede llamar directamente a un archivo en mi mismo servidor
    fetch('/user.json')
    .then(response => response.json())
    .then(data => {console.log(data)})
