// Array destructuring
const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
console.log(names);

// old way using index
// const fred = names[0];
// const kate = names[1];
// console.log(kate);

// new way using destructuring syntax
// const [fred, kate] = names;
// console.log(kate);

// const [fred, kate, , ricky] = names;
// console.log(ricky);

const [fred, kate, ...remainingNames] = names;
console.log(remainingNames);

// Object destructuring
const person = {
    name:"Joni",
    age: 76
}

// old way using dot notation or square bracket notation
// const name = person.name;
// const age = person["age"];

// console.log(name);
// console.log(age);

// new way using destructuring
const { name, age } = person;

console.log(name);
console.log(age);

