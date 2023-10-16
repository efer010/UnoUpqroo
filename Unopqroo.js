const rl = require ("readline-sync");
const { toValue } = require("vue");
// juego uno 
var deck = [];
var colors = ["yellow","blue", "red", "green"];
var types = ["comun", "especial", "comodin"];

var card = {
    color: null, // color puede ser amarillo, rojo, azul y verde
    number: null, // 0-9
    type: null //comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ) {
   
    for (var cNumber = 0; cNumber < 10; cNumber++ ) {
        deck.push({color: colors[cColor], number: cNumber, type: "comun"})
    }
    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++ ) {
        deck.push({color: colors[cColor], number: cNumber1, type: "comun"})
    }
 deck.push({color: colors[cColor], number: "+2", type: "especiales"});
 deck.push({color: colors[cColor], number: "+2", type: "especiales"});
 deck.push({color: colors[cColor], number: "B", type: "especiales"});
 deck.push({color: colors[cColor], number: "B", type: "especiales"});
 deck.push({color: colors[cColor], number: "R", type: "especiales"});
 deck.push({color: colors[cColor], number: "R", type: "especiales"});
}

 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});

//console.log(deck);

const players = rl.question("Cuantos jugadores seran?", [])
const totalCards = players * 7;
//repartir 7 cartas por jugador
//recorro el total de tarjetas (Total de tarjetas = tarjetas/7 x jugador)
//arreglo x jugador
var cardsPlayers = {};


for(var cTCards = 0; cTCards < 7; cTCards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++){
        if(!cardsPlayers["player_"+cPlayers]){
            cardsPlayers["player_"+cPlayers] = [];
        }

    
        cardsPlayers["player_"+cPlayers].push(deck.shift());
    
        }
}

var trash = [];

trash.push(deck.shift());

console.log(trash);
 
function cardValidation (card) {
    //console.log(card.number);
    if (card.number == trash) {
        console.log("es igual");    
    } else {
        console.log("no es igual");
    }
    //console.log(card.color); 
       // if (card.color == trash) {
       //     console.log("es igual");
       // } else {
        //    console.log("no es igual");
       // }
}
//trash.deck({color: colors[cColor], number: cNumber1, type: "comun"})
cardValidation({color: trash,number: trash,type:trash});
//paso 1 definir mi funcion
//hacer que mi funcion resiva un parametro(la carta)
//obtener la informacion de la carta(numero,color)
//comparar que el color de mi carta obtenida coincidé con la primera carta de mi trash
//si no validar que el color coincidé 
// si el numero o el color coincide retornar la carta
//si no retornar nulo

//console.log(cardsPlayers);
