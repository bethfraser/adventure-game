var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var hero = require('./adventure_game')[0];
var food = require('./adventure_game')[1];
var faveFood = require('./adventure_game')[2];
var rat = require('./adventure_game')[3];
var villain = require('./adventure_game')[4];



describe('hero', function(){
  it('can speak!!!', function(){
    expect(hero.talk()).equal("I am a hero called Callum");
  });

  it('can eat food', function(){
    hero.eat(food);
    expect(hero.stomach).to.include(food);
  });

  it('can eat food to heal self by food.value', function(){
    hero.health = 0;
    hero.eat(food);
    expect(hero.health).to.equal(food.repValue);
  });

  it('should receive 1.5 times health points from fave food', function(){
    hero.health = 0;
    hero.eat(faveFood);
    expect(hero.health).to.equal(faveFood.repValue * 1.5);
  });

  it('should lose health points from eating poisoned food', function(){
    hero.health = 100;
    rat.touch(food);
    hero.eat(food);
    expect(hero.health).to.equal(100 - food.repValue);
    food.poisoned = false;
  });

  it('should take damage on hit', function(){
    hero.health = 100;
    villain.hit(hero, 10);
    expect(hero.health).to.equal(90);
  })
  it('can avoid being poisoned by taking an antidote', function(){
    hero.antidote = 1;
    hero.health = 100;
    food.poisoned = true;
    hero.eat(food);
    expect(hero.health).to.equal(120);
    food.poisoned = false;
  })

})

describe('rat', function(){
  it('can poison food', function(){
    rat.touch(food);
    expect(food.poisoned).to.equal(true);
    food.poisoned = false;
  })
})
