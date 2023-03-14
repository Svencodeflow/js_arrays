// console.log("hello");


// lvl1_1
console.log('-------------lvl1_1-------------');
let person = ["Sven", "Schlaak", "Superreich"]
let friends = ["Steffen", "Popolino", "ReaktusMaximuss"]
let favoriteFood = ["Spagetti", "Suppe", "SuppeDuppe"]

console.log(person);
console.log(friends);
console.log(favoriteFood);

// lvl1_2
console.log('-------------lvl1_2-------------');
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);


// lvl1_3
console.log('-------------lvl1_3-------------');
console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);


// lvl1_4
console.log('-------------lvl1_4-------------');
console.log(person);
console.log(person.length);
console.log(person.push("Spitzname:", "Longdong"))
console.log(person);
console.log(person.length);
console.log('==========================');
console.log(friends);
console.log(friends.length);
console.log(friends.push("Superdude:", "Flexbex"))
console.log(friends);
console.log(friends.length);
console.log('==========================');
console.log(favoriteFood);
console.log(favoriteFood.length);
console.log(favoriteFood.push("Superfood:", "Gridmastersuppe"))
console.log(favoriteFood);
console.log(favoriteFood.length);

// lvl1_5
console.log('----------lvl1_5-----------');
console.log(person);
let lastValue = person.pop()
console.log(lastValue);
console.log(person);
console.log('==========================');
console.log(friends);
let lastValue2 = friends.pop()
console.log(lastValue2);
console.log(friends);
console.log('==========================');
console.log(favoriteFood);
let lastValue3 = favoriteFood.pop()
console.log(lastValue3);
console.log(favoriteFood);

// lvl1_6
console.log('----------lvl1_6-----------');
console.log(person);
let lastValue4 = person.shift()
console.log(lastValue4);
console.log(person);
console.log('==========================');
console.log(friends);
let lastValue5 = friends.shift()
console.log(lastValue5);
console.log(friends);
console.log('==========================');
console.log(favoriteFood);
let lastValue6 = favoriteFood.shift()
console.log(lastValue6);
console.log(favoriteFood);

// lvl1_7
console.log('----------lvl1_7-----------');
console.log(person);
let lastValue7 = person.unshift("Sven")
console.log(lastValue4);
console.log(person);
console.log('==========================');
console.log(favoriteFood);
let lastValue8 = favoriteFood.unshift("Spagetti")
console.log(lastValue6);
console.log(favoriteFood);

// lvl1_9 
console.log('----------lvl1_9-----------');
let urlaub = ["spanien", "italien", "Mazedonien", "Belgien", "Frankreich"]
console.log(urlaub);
console.log('==========================');
console.log(urlaub.slice(1,2))
console.log('==========================');
console.log(urlaub);

// lvl1_10 
console.log('----------lvl1_10-----------');
const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

let vari = text.split()
let vari2 = text.split("")
let vari3 = text.split(" ")
let vari4 = text.split(" ", 5)

console.log(vari);
console.log('==========================');
console.log(vari2);
console.log('==========================');
console.log(vari3);
console.log('==========================');
console.log(vari4);
