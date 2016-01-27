Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}


var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.stomach = [];
  this.antidote = 0;
  this.spells = [];
}

Hero.prototype = {
  talk: function(){
    return "I am a hero called " + this.name;
  },
  eat: function(food){
    this.stomach.push(food);
    if(food.poisoned === true){
      if(this.antidote > 0){
        if(food.name === this.faveFood){
          this.health += (food.repValue * 1.5);
        }
        else {
          this.health += food.repValue;
        }
        this.antidote -= 1;
      }
      else{
        this.health -= food.repValue;
      }
    }
    else{
      if(food.name === this.faveFood){
        this.health += (food.repValue * 1.5);
      }
      else {
        this.health += food.repValue;
      }}
    },
    hit: function(victim, damage){
      if (!victim.spells.contains("protection")){
      victim.health -= damage;
      }
    }

  }


  var Food = function(name, poisoned, repValue){
    this.name = name;
    this.poisoned = poisoned;
    this.repValue = repValue;
  }

  var Rat = function(name){
    this.name = name;
  }

  Rat.prototype = {
    touch: function(food){
      food.poisoned = true;
    }
  }


  // var hero1 = new Hero('Callum', 100, 'beer');
  // var villain = new Hero('Beth', 100, 'pizza');
  // var rat1 = new Rat("ratty");
  // var food1 = new Food('bread', false, 20);
  // var food2 = new Food('beer', false, 40);


  module.exports = [Hero, Food, Rat]