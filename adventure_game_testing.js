var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var Hero = require('./adventure_game')[0];
var Food = require('./adventure_game')[1];
var Rat = require('./adventure_game')[2];



describe('hero', function(){
  it('can speak their name', function(){
    var hero = new Hero('Callum', 100, 'beer');
    expect(hero.talk()).equal("I am a hero called Callum");
  });

  it('can eat food, which goes into their stomach', function(){
    var hero = new Hero('Callum', 100, 'beer');
    var food = new Food('bread', false, 20);
    hero.eat(food);
    expect(hero.stomach).to.include(food);
  });

  it("can eat food to heal self by food's value", function(){
    var hero = new Hero('Callum', 100, 'beer');
    var food = new Food('bread', false, 20);
    hero.eat(food);
    expect(hero.health).to.equal(120);
  });

  it('should receive 1.5 times health points from favourite food', function(){
    var hero = new Hero('Callum', 100, 'beer');
    var faveFood = new Food('beer', false, 20);
    hero.eat(faveFood);
    expect(hero.health).to.equal(130);
  });

  it('should lose health points from eating poisoned food', function(){
    var hero = new Hero('Callum', 100, 'beer');
    var badFood = new Food('bread', true, 20);
    hero.eat(badFood);
    expect(hero.health).to.equal(80);
  });

  it('should take damage on hit', function(){
    var hero = new Hero('Callum', 100, 'beer');
    var villain = new Hero('Beth', 100, 'pizza');
    villain.hit(hero, 10);
    expect(hero.health).to.equal(90);
  });

  it('can avoid being poisoned by taking an antidote', function(){
    var hero = new Hero('Callum', 100, 'beer');
    hero.antidote = 1;
    var badFood = new Food('bread', true, 20);
    hero.eat(badFood);
    expect(hero.health).to.equal(120);
  });

  it('can have a protection spell which prevents damage from hits', function(){
    var hero = new Hero('Beth', 100, 'pizza');
    var villain = new Hero('Joker', 100, 'cereal');
    hero.spells.push("protection");
    villain.hit(hero, 20);
    expect(hero.health).to.equal(100);

  });

});


describe('rat', function(){
  it('can poison food by touching it', function(){
    var rat = new Rat('Scabbers');
    var food = new Food('bread', false, 20);
    rat.touch(food);
    expect(food.poisoned).to.equal(true);
  });
});
