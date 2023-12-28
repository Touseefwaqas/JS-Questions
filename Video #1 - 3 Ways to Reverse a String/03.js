// Using Array.from and reduce() method

let str = "Touseef";
let reversedStr = Array.from(str).reduce((reversed, char) => {
    char + reversed;
}, "");
console.log(reversedStr);