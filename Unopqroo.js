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
    if (card.number == trash[trash.length-1].number || card.color == trash[trash.length-1].color) {
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
cardValidation({color: trash,number: 5,type:trash});



    for(const player in cardsPlayers) {
        //console.log(cardsPlayers[player])
        //primer player ponga una carta
        //paso 1: ver mis cartas 
        //paso 2: Elegir carta 
        //paso 3: validar carta
        //paso 4: poner carta (de mano jugador al trash)

        var Cplayer = [player];
        var currentPlayer = 0;
        var reverse = true; 
        var nPlayer = cReverse();

        function cReverse() {
            const tPlayer = Cplayer.length;

            var nPlayer;
            if (reverse) {
                nPlayer = Cplayer[(currentPlayer  + 1) % tPlayer];
            } else {
                nPlayer = Cplayer[(currentPlayer - 1 + tPlayer) % tPlayer];
            }
            return nPlayer;
        }
    }
    console.log(cardsPlayers);
    console.log("Jugador actual: ", currentPlayer);
    
    
    
    console.log("Siguiente jugador:", nPlayer);

    

    function playerValidation (cardsPlayers) {
    //console.log(card.number);
    if (cardsPlayers.number == trash[trash.length-1].number || cardsPlayers.color == trash[trash.length-1].color) {
        console.log("es igual");    
    } else {
        console.log("no es igual");
    }

    
    }

    

    
      
    