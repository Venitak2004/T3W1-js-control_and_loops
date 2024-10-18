let fruitChoices = [
    "oranges",
    "bananas",
    "mangoes",
    "lemons"
];
// set index to the lowest value of the index = 0, add a condition of 
//how many times the array
//index++ increment by 1
for (let index = 0; index < fruitChoices.length; index++) {
    const element = fruitChoices[index];
    console.log(element);
    console.log(`The Fruit of this iteration is ${fruitChoices[index]}`);
}

//start at 0, until 0 reaches 4, increment through by 1 each iteration
for (let i = 0; i < 5; i++) {
    console.log(`This is the ${i} iteration of the loop`); //string interpolation
    console.log("this is the " + i + " iteration of the loop") //string concatenation
}

//forEach

fruitChoices.forEach(element => {
    console.log("For each loop result: " + element.toLocaleUpperCase());
})

//for of

for (const fruit of fruitChoices) {
    console.log("For of result: " + fruit);
}

//map -> map reutnrs a new array, and every element has a change applied on it.

let fruitChoicesShortened = fruitChoices.map(fruit => {
    return fruit.substring(0,3);
})
console.log(fruitChoicesShortened);

//filter -> returns a new array, only with the elements that meet the condition.

let nonCitrusFruits = fruitChoices.filter(fruit => {
    return fruit != "oranges" && fruit != "lemons"
})
console.log(nonCitrusFruits);