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