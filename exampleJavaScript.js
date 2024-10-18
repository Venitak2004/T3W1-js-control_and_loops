//console.log("Hello!")
//if and if/else statements

let someMessage = "Bananas";

if (someMessage == "oranges"){
    //truthy condition
    console.log("We have oranges");
}

console.log(someMessage);
let someNumber = 3;

if (someNumber === 10) {
    console.log("We have 10!");
}

if (someNumber >= 5) {
    console.log("We have 5 or more!");
} else {
    console.log("Less than five");
}

//ternary operators - like a one line if/else statement.

let someCoolMessage = (someMessage === "Bananas") 
        ? someMessage.toLocaleUpperCase() 
        : "Default message here!";

if (someMessage === "Bananas"){
    //                   Bananas            Ba          BA
    someCoolMessage = someMessage.substring(0,2).toLocaleUpperCase();
}else {
    someCoolMessage = "Default message in the else statement."
}
console.log(someCoolMessage);

// Switch Operator
someMessage = "Orange";
switch (someMessage) {
    case "orange":
        break;
        console.lot("We have oranges");
        case "banana":
            console.log("We have bananas");
            break;
                case "mango":
                    console.log("We have mangos");
                    break;
                    default:
                        console.log("We have other fruits.")
}

// Short circuit logic

someMessage = "Mango";
//evaluate if the first part is true, if true then return the second one.
//if the first part is fals, it returns the first value 
let circuitLogicMessage = someMessage && "We have a message";

console.log(circuitLogicMessage);

//It returns the first block that is true
//If both false it will return the second option.
circuitLogicMessage = someMessage || "We have a message";
console.log(circuitLogicMessage);

// Loops