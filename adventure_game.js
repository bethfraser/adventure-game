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
    },
    bunnify: function(rat, newName){
      if(this.spells.contains("bunnify")){
        rat.type = "bunny";
        rat.name = newName;
      }
      
    }

  }


  var Food = function(name, poisoned, repValue){
    this.name = name;
    this.poisoned = poisoned;
    this.repValue = repValue;
  }

  var Animal = function(name, type){
    this.name = name;
    this.type = type;
  }


  Animal.prototype = {
    touch: function(food){
      if (this.type = "rat"){
      food.poisoned = true;
      }
  }
  }


//   var hero1 = new Hero('Callum', 100, 'beer');
//   var villain = new Hero('Beth', 100, 'pizza');
//   var rat1 = new Animal("ratty", "rat");

// hero1.spells.push("bunnify")
// hero1.bunnify(rat1,"Fluffy");
// console.log(rat1);
  // var food1 = new Food('bread', false, 20);
  // var food2 = new Food('beer', false, 40);


  module.exports = [Hero, Food, Animal]