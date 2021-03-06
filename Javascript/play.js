var name = 'Max';
var age = '29';
var hasHobbies = true;

function summarizedUser(userName, userAge, userHasHobby){
    return('Name is ' + userName + ', age is ' + userAge + 'and the user has hobbies: ' + userHasHobby);
}

console.log(summarizedUser(name,age,hasHobbies));

// now a days let and const is used instead of var
// const is used for variable whose value is not going to change in the whole program
// let name = 'Max';
// const age = '29';
// let hasHobbies = true;

// anonymous function
const summarizedUser = function (userName, userAge, userHasHobby){
    return('Name is ' + userName + ', age is ' + userAge + 'and the user has hobbies: ' + userHasHobby);
}

// arrow function
const summarizedUser = (userName, userAge, userHasHobby) => {
    return('Name is ' + userName + ', age is ' + userAge + 'and the user has hobbies: ' + userHasHobby);
}

const add = (a,b) => {
    return a+b;
}

// or

const add = (a,b) => a+b;

const addOne = a => a+1;

const addRandom = () => 1+2;

const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

const hobbies = ['Sports', 'Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}))
// prints: ['Hobby: Sports', 'Hobby: Cooking']

console.log(hobbies);
// prints: [Sports, Cooking]

hobbies.push('programming');
console.log(hobbies);

const copiedArray = hobbies.splice();
console.log(copiedArray);

const copiedArray = [hobbies];
console.log(copiedArray);
// prints [[Sports, Cooking]]
// new array where the first element is the old array

// Spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);
// Prints: [Sports, Cooking]
// it takes out all the elements from previous array
// and puts them into new array

// Rest operator
const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));
console.log(toArray(1,2,3,4,5,6,7,8,));
// any amount of args you mention above will be printed 
// with the help of spread operator

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// object destructuring
const {name, age} = person;
console.log(name, age);

// Array destructuring
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

