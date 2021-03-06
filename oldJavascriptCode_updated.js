 // Variables
 var maxHealth = 100;
 var currentHealth = 50.5;
 currentHealth = maxHealth;
 //maxHealth = currentHealth;
 var isGameOver = false;
 isGameOver = true;

 // Const, let, var
 const maxHealth = 100;
 var currentHealth = 50;
 if (true) {
    // var isGameOver = false;
    let isNotGameOver = true;
 }
 // print(isGameOver) // false
 print(isNotGameOver) // error

 // Strings
 var characterName = "Nimish";
 characterName = "Zenva"
 var age = 26;
 let message = `I am ${age} years old.`; // message = "I am 26 years old."
 let ageMessage = "Hi, my name is " + characterName + " and my age is " + age; // ageMessage = "I am 26 years old."

 let length = characterName.length;
 let upperName = characterName.toUpperCase();
 characterName = characterName.toLowerCase();

 let zen = characterName.slice(0, 3);

 var level = 1;
 var title = `Level ${level}`;

 // Operators
 var health = 50;

 // + - * / % **
 health = health + 10; // 60
 health = health % 50; // 10
 // health % 2 == 0
 health = health ** 2; // 100

 // +=, -=, *=, /=
 health -= 20; // health = health - 20

 // ++ --
 health++; // 81

 // health = (health * 2) + (health / 5);

 health++;
 health = health + 1;
 health += 1;

 // > >= < <= == !=
 var number1 = 5;
 var number2 = 10;

 var result = number1 > number2; // false
 result = number1 != number2; // true

 var string1 = "hello"
 var string2 = "world"
 result = string1 == string2; // false

 // !, ||, &&
 result = !result; // true
 result = number1 > number2 && string1 == string2; // false
 number2 = number1;
 result = number1 == number2 || string1 == string2; // true

 // ? :
 result = number1 > number2 ? number1 : number2;
 var numberOfLives = 3;

 var isGameOver = !(numberOfLives > 0);

 // Arrays
 var inventory = ["shirt", "axe", "bread"];
 // inventory = ["water", "pants"];

 let shirt = inventory[0];
 inventory[2] = "cheese";

 var length = inventory.length // 3
 length = inventory[0].length; // 5

 inventory.push("water"); // ["shirt", "axe", "cheese", "water"]
 var water = inventory.pop();

 // 2D Arrays
 var levels = [
    [1.1, 1.2, 1.3], 
    [2.1, 2.2, 2.3, 2.4], 
    [3.1, 3.2],
 ];

 var firstWorld = levels[0]; // [1.1, 1.2, 1.3]
 var firstLevel = levels[0][1]; // 1.2
 // levels[0][1] = 1.4

 levels[1].pop()
 levels[2].push(3.3)

 // Functions
 var currentHealth = 50
 var healAmount = 10
 function heal() {
    currentHealth += healAmount;
    // function nested() {

    // }
 }
 heal(); // currentHealth = 60
 // var func = function heal() {
 //    currentHealth += healAmount;
 // }

 // Function Parameters
 var currentHealth = 50
 function heal(healAmount = 10) {
    currentHealth += healAmount;
 }
 heal(); // currentHealth = 60
 heal(40); // currentHealth = 100

 // Function return values
 var maxHealth = 100
 var currentHealth = 50
 function heal(healAmount = 10) {
    var newHealth = currentHealth + healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return calculatePercent(currentHealth, maxHealth);
 }
 function calculatePercent(dividend, divisor) {
    return (dividend / divisor) * 100;
 }
 var result = heal(); // currentHealth = 60, result = 60
 result = heal(50); // currentHealth = 100, result = 100

 // If statements
 var keyPressed = " ";
 var xPos = 0;

 if (keyPressed == "l") {
    xPos -= 1;
 } else if (keyPressed == "r") {
    xPos += 1;
 } else {
    xPos = 0;
 }

 var keyPressed = "l";
 var xPos = 0;
 let endPos = 5;
 let startPos = 0;

 // if (keyPressed == "r" && xPos < endPos) {
 //    xPos += 1;
 // } 

 if (keyPressed == "r") {
    if (xPos < endPos) {
    	xPos += 1;
    }
 } else if (keyPressed == "l") {
    if (xPos > startPos) {
    	xPos -= 1;
    }
 } else {
    xPos = 0;
 }

 // var someNum = 5;

 // if (someNum > 4) {
 //    xPos += 1;
 // }
 // if (someNum > 2) {
 //    xPos -= 1;
 // }

 // While Loops
 let endPos = 10;
 var xPos = 0;
 var enemyPos = 4;
 var isGameOver = false

 // while(pos < endPos) {
 //    pos++;
 // }

 // Control Statements
 // while(!isGameOver) {
 //    xPos++;
 //    if (xPos >= endPos || xPos == enemyPos) {
 //    	isGameOver = true;
 //    }
 // }

 // break
 // while(xPos < endPos) {
 //    xPos++;
 //    if (xPos == enemyPos) {
 //    	break;
 //    }
 // }

 // while(xPos < endPos) {
 //    if (xPos % 2 == 1) {
 //    	xPos += 2;
 //    	continue;
 //    }
 //    xPos++;
 //    if (xPos == enemyPos) {
 //    	break;
 //    }
 // }

 function movePlayer() {
    while(xPos < endPos) {
    	xPos++;
    	if (xPos == enemyPos) {
    		return;
    	}
    }
 }

 // For loops
 var items = ["Axe", "Shirt", "Knife"]
 var finalString = "In my inventory, I have "
 // for(var i = 0; i < items.length; i++) {
 //    var itemName = items[i];
 //    finalString += itemName + " ";
 // }
 items.forEach(function(element) {
    finalString += element + " ";
 });

 // Objects
 var gameCharacter = {
    name: "Nimish",
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
    	this.xPos += x;
    }
 };
 var name = gameCharacter.name;
 // var name = gameCharacter['name'];
 gameCharacter.items = ["Axe", "Bread"];
 gameCharacter.move(5);
 var x = gameCharacter.xPos;
 gameCharacter.yPos = 0;
 gameCharacter.move = function(x,y) {
    this.xPos += x;
    this.yPos += y;
 }

 // Getters and Setters
 var gameCharacter = {
    name: "Nimish",
    class: "Human",
    health: 100,
    get title() {
    	return this.name + " the " + this.class;
    },
    set maxHealth(h) {
    	this.health = h;
    }
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
    	this.xPos += x;
    }
 };
 gameCharacter.title; // "Nimish the Human"
 gameCharacter.maxHealth = 150; // health = 150
 var health = gameCharacter.maxHealth; // undefined
 // var i = 5
 // var j = i;
 // i = 10; // i = 10, j = 5
 // var gc = gameCharacter
 // gc.name = "afsdfasdf" // gc.name = "afsdfasdf", gameCharacter.name = "afsdfasdf" 

 // Object Constructors
 function gameCharacter(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function(x) {
    	this.xPos += x;
    }
    this.class = "Human"
 }
 var gc1 = new gameCharacter("Nimish", 0, 100);
 var name = gc1.name;
 gc1.health = 150;
 gc1.move(10);
 var gc2 = new gameCharacter("Zenva", 5, 150);
 // var gc1 = {
 //    name: "Nimish",
 //    xPos: 0,
 //    health: 100
 // }
 // gc1.yPos = 5;
 // var gc2 = {
 //    name: "Zenva",
 //    xPos: 5,
 //    health: 150
 // }

 // Prototyping
 function gameCharacter(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function(x) {
    	this.xPos += x;
    }
 }
 var gc1 = new gameCharacter("Nimish", 0, 100);
 gc1.yPos = 5; // 5
 var gc2 = new gameCharacter("Zenva", 5, 150);
 // gc2.yPos; // //undefined because gc2 has no 'yPos' attribute
 gameCharacter.prototype.class = "Human";
 gc1.class = "afsdfasdf";
 gc2.class; // Human
 var heal = function(amount) {
    this.health += amount;
 }
 gameCharacter.prototype.heal = heal;
 gc1.heal(5);
 gc2.heal(10);

 // Classes
 class GameCharacter {
    constructor(name, xPos, health) {
    	this.name = name;
    	this.xPos = xPos;
    	this.health = health;
    }
    move(x) {
    	this.xPos += x;
    }
 }
 class HumanCharacter extends GameCharacter {
    constructor(name, xPos, health) {
    	super(name, xPos, health);
    	this.classification = "Human";
    }
 }
 var gc1 = new GameCharacter('Nimish', 0, 100);
 gc1.move(5);
 gc1.name;
 var hc1 = new HumanCharacter('Zenva', 5, 150);