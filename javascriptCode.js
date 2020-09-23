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
