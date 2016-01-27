var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;

  this.stomach = [];
  this.antidote = 0;
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
      victim.health -= damage;
    }

  }

  var hero1 = new Hero('Callum', 100, 'beer');
  var villain = new Hero('Beth', 100, 'pizza');

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

  var rat1 = new Rat("ratty");

  var food1 = new Food('bread', false, 20);
  var food2 = new Food('beer', false, 40);

  module.exports = [hero1, food1, food2, rat1, villain]