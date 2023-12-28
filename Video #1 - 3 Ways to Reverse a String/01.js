// 1. By converting the string into array and then using split(""), reverse() and join("")

let str = "Touseef, How are you?";
let reversedStr = str.split("").reverse().join(" ");
console.log(reversedStr);