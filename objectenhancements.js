function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
  /* Write an ES2015 Version */

  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }
  /*Computed Property Names*/

  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}
/*Computed Property Names ES2015*/

instructor[favoriteNumber] = "That is my favorite!"
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}
/*Object Methods*/

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + "says bye!"
    }
  }
/*Object Methods ES2015*/

  const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
/*createAnimal function*/

  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}