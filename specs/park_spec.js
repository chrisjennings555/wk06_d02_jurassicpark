const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let allDinosaurs = [dinosaur1, dinosaur2, dinosaur3];

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    dinosaur1 = new Dinosaur("T-Rex", "carnivore", 20);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 10);
    dinosaur3 = new Dinosaur("Allosaurus", "herbivore", 15);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    const dinosaur = dinosaur2;
    park.addDinosaur(dinosaur);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostVisitors(dinosaur1, dinosaur2);
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.addDinosaur(dinosaur1);
    const actual = park.findDinosaurBySpecies("carnivore");
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
