const Park = function (name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
};

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.methodName = function () {

};

Park.prototype.removeDinosaur = function (name) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if(this.dinosaurs[i] === name){
      this.dinosaurs.splice(i, 1);
      break;
    }
  }
};

Park.prototype.mostVisitors = function (dino1, dino2) {
  if (dino1.guestsAttractedPerDay > dino2.guestsAttractedPerDay){
    return (dino1);
  }
  else if (dino2.guestsAttractedPerDay > dino1.guestsAttractedPerDay){
    return(dino2);
  }
};

Park.prototype.findDinosaurBySpecies = function (species) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if(this.dinosaurs[i] === species){
      return (this.dinosaurs.species);
      break;
    }
  }

};

module.exports = Park;
