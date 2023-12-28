// Using forof

let str = "Touseef";
let reversed = "";
for (const char of str) {
    reversed = char + reversed;
    console.log(reversed);
    console.log(char);
}

// 1. T + "";
// 2. o + "T"; reversed = ot
// 3. u "ot"; reversed = uot

console.log(reversed);