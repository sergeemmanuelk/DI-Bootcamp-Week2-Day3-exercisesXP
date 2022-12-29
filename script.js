console.log("*****Exercise 1 : List Of People*****")

//Part I - Review About Arrays

const people = ["Greg", "Mary", "Devon", "James"]

//Write code to remove “Greg” from the people array.
people.shift() //Output : ["Mary", "Devon", "James"]

//Write code to replace “James” to “Jason”.
people[people.length - 1] = "Jason" //Output : ["Mary", "Devon", "Jason"]

//Write code to add your name to the end of the people array.
people.push("Serge") //Output : ["Mary", "Devon", "Jason", "Serge"]

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary")) //Output : 0

//Write code to make a copy of the people array using the slice method.
copyPeople = people.slice(1, -1)
console.log(copyPeople) //Output : ["Devon", "Jason"]

//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")) //Because foo is missing in the array

//Create a variable called last which value is the last element of the array.
last = people[people.length - 1]
console.log(last)

console.log(people)

/**
 * Part II - Loops
 */

//Using a loop, iterate through the people array and console.log each person.
for(let i = 0; i < people.length; i++) {
    console.log(people[i])
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
console.log("---------------")

for(let i = 0; i < people.length; i++) {
    if(people[i] === people[people.length - 1]) {
        break
    }
    console.log(people[i])
}

console.log("*****Exercise 2 : Your Favorite Colors*****")

//Create an array called colors where the value is a list of your five favorite colors
let colors = ["Blue", "Black", "White", "Grey", "Indigo"]

//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let y = 0; y < colors.length; y++) {
    console.log(`My #${y+1} choice is ${colors[y]}`)
}

console.log("---------------")

//Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
let suffix = ["st", "nd", "rd", "th", "th"]
for(let w = 0; w < colors.length; w++) {
    console.log(`My ${w+1}${suffix[w]} choice is ${colors[w]}`)
}

console.log("*****Exercise 3 : Repeat The Question*****")

//Prompt the user for a number.
let number = prompt("Enter a number smaller than 10 : ")
number = parseInt(number)
//console.log(typeof(number))

//While the number is smaller than 10 continue asking the user for a new number.

while(number < 10) {
    number++
    number = prompt("Enter a number smaller than 10 : ")
}

console.log("*****Exercise 4 : Building Management*****")

//Copy and paste the above object to your Javascript file

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building.
console.log(building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

//Console.log the name of the second tenant and the number of rooms he has in his apartment
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200
let rentOfSarah = building.numberOfRoomsAndRent.sarah[1]
let rentOfDavid = building.numberOfRoomsAndRent.david[1]
let rentOfDan = building.numberOfRoomsAndRent.dan[1]

if(rentOfSarah + rentOfDavid > rentOfDan) {
    building.numberOfRoomsAndRent.dan[1] = 1200
}

console.log(building)

console.log("*****Exercise 5 : Family*****")

//Create an object called family with a few key value pairs.
const family = {
    father: "Mike",
    Mother: "Serena",
    son: "Peter",
    daughter: "Lucie"
}

//Using a for in loop, console.log the keys of the object.
console.log("Keys")
for(let b in family) {
    console.log(b)
}

console.log("---------------")

//Using a for in loop, console.log the values of the object.
console.log("values")
for(let b in family) {
    console.log(family[b])
}

console.log("*****Exercise 6 : Rudolf*****")

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

for(let c in details) {
    console.log(c)
    console.log(details[c])
}

console.log("*****Exercise 7 : Secret Group*****")

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names = names.sort()
for(str in names) {
    console.log(names[str])
}

