//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseThru(object){
    for (let i = 0; i < Object.entries(object).length; i++) {
        console.log(Object.entries(object)[i])
    }
}
console.log(parseThru(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        return `Your ${this.name}, You are ${this.age} old`
    }
}

Person.prototype.addAge = function() {
    return 'Your ' + this.name + ', You are '+ (this.age + 3)
}; 

Person.prototype.addAge = function() {
    return 'Your ' + this.name + ', You are '+ (this.age + 3)
};

let newPers = new Person('Lil Uzi', 25)
let newPers1 = new Person('Playboi Carti', 25)
console.log(newPers.printInfo())
console.log(newPers1.addAge())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function howLong(str){
    return new Promise((resolve,reject) => {
        if(str.length >= 10){
            resolve('Big Word');
        } else {
            reject('Small Number');
        }
    })
}
console.log(howLong('supercalifig'))
