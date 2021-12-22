var name = 'Max';
var age = '29';
var hasHobbies = true;

function summarizedUser(userName, userAge, userHasHobby){
    return('Name is ' + userName + ', age is ' + userAge + 'and the user has hobbies: ' + userHasHobby);
}

console.log(summarizedUser(name,age,hasHobbies));