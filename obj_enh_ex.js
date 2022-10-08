function createInstructor(firstName, lastName){
    return {firstName, lastName}
}

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const newInstructor = {
  firstName: "Grant",
  sayHi() {
    return "Hi!"
  },
  sayBye() {
    return this.firstName + " says bye!"
  }
}


const d = createAnimal('dog', 'bark', 'wooof!')
const c = createAnimal('cat', 'meow', 'rowaa!')
function createAnimal(species, verb, noise){
  return {
    species,
     [verb]() {
      return noise
    }
  }
  
}