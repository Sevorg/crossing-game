var maxHealth = 100;
var currentHealth = 50.5;
currentHealth = maxHealth;
//maxHealth = currentHealth;

var isGameOver = false;
isGameOver = true;

console.log(currentHealth);


// const, let, var
const maxHealth = 100;
var currentHealth = 100;

if (true) {
    // var isGameOver = false;
    let isNotGameOver = true;
}

// console.log(isGameOver) // undefined
console.log(isNotGameOver) // error


var characterName = "Nimish";
characterName = "Zenva";
var age = 26;

let message =
`Hi, my name is ${characterName} and my age is ${age}`;

let length = characterName.length;
let upperName = characterName.toUpperCase();
characterName = characterName.toLowerCase();

let zen = characterName.slice(0, 3);


var health = 50;

// + - * / % **

health = health + 10; // 60
health = health % 50; // 10
// health % 2 == 0;
health = health ** 2; // 100

// +=, -=, *=, /=
health -= 20; // health = health - 20

// ++ --
health++; // 81

// health = (health * 2) + (health / 5);


// ? :
result = number1 > number2 ? number1 : number2;


var inventory = ["shirt", "axe", "bread"];
// invertory = ["water", "pants"];

let shirt = inventory[0];
inventory[2] = "cheese";

inventory.length; // 3
inventory[0].length; // 5

inventory.push("water");
var water = inventory.pop();


var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2]
];

var firstWorld = levels[0];
var firstLevel = levels[0][1];


var maxHealth = 100;
var currentHealth = 50;

function heal(healAmount = 10) {
    var newHealth = currentHealth + healAmount;
    newHealth > 100 ? maxHealth : newHealth;
    currentHealth = newHealth;
    return (currentHealth / maxHealth) * 100;
}

var result = heal(10);

console.log(currentHealth);
console.log(result);

heal();

console.log(currentHealth);


var keyPressed = "l";
var xPos = 0;
var endPos = 5;

if (keyPressed == "l") {
    if (xPos < enPos) {
        xPos--
    }; 
} else if (keyPressed == "r") {
    xPos++;
} else {
    xPos = 0;
}

console.log(xPos);


let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

// while(pos < endPos) {
//     pos++;
//     console.log(pos);
// }

// while(!isGameOver) {
//     pos++;
//     console.log(pos);
//     if (pos >= endPos || pos == enemyPos) {
//         isGameOver = true;
//     }
// }

while(pos < endPos) {
    pos++;
    console.log(pos);
    if (pos == enemyPos) {
        break;
    }
 }

// while(pos < endPos) {
//     if (pos % 2 == 1) {
//         pos += 2;
//         continue;
//     }
//     pos++;
//     console.log(pos);
//     if (pos == enemyPos) {
//         break;
//     }
//  }


var items = ["Axe", "Shirt", "Knife"]
var finalString = "In my inventory, I have "

// for(var i = 0; i < items.length; i++) {
//     var itemName = items[i];
//     finalString += itemName + " ";
// }

items.forEach(function(element) {
    finalString += element + " ";
});

console.log(finalString)


var gameCharacter = {
    name: "Nimish",
    class: "Human",
    health: 100,
    get title() {
        return this.name + " the " + this.class
    },
    set maxHealth(h) {
        this.health = h;
    },
    xPos: 0,
    items: ["Knife", "Food"],
    move : function(x) {
        this.xPos += x;
    }
};

gameCharacter.title; // "Nimish the Human"
gameCharacter.maxHealth = 150; // health = 150
var health = gameCharacter.maxHealth; // undefined

var name = gameCharacter.name;
gameCharacter.items = ["Axe", "Bread"];
gameCharacter.move(5);
var x = gameCharacter.xPos;

gameCharacter.yPos = 0;
gameCharacter.move = function(x,y) {
    this.xPos += x;
    this.yPos += y;
}


function gameCharacter(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = fuction(x) {
        this.xPos += x;
    }
    this.class = "Human"
}

var gc1 = new gameCharacter("Nimish", 0, 100);
var name = gc1.name;
gc1.health = 150;
gc1.move(10);
var gc2 = new gameCharacter("Zenva", 5, 150);


function gameCharacter(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = fuction(x) {
        this.xPos += x;
    }
}

var gc1 = new gameCharacter("Nimish", 0, 100);
gc1.yPos = 5; // 5

var gc2 = new gameCharacter("Zenva", 5, 150);
// gc2.yPos; // reference error

gameCharacter.prototype.class = "Human";
gc1.class = "afsdfasdf";
gc2.class; // Human

var heal = function(amount) {
    this.health += amount;
}

gameCharacter.prototype.heal = heal;
gc1.heal(5);
gc2.heal(10);


class gameCharacter {
    constructor(name, xPos, health) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }
    move(x) {
        this.xPos += x;
    }
}

class humanCharacter extends gameCharacter {
    constructor(name, xPos, health) {
        super(name, xPos, health);
        this.classification = "Human";
    }
}
var gc1 = new gameCharacter("Nimish", 0, 100);
gc1.move(5);
gc1.name;

var hc1 = new humanCharacter("Zenva", 5, 150);