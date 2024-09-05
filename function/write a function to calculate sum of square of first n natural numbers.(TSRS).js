// let square = [];
// squareindex = 0;
// let num = parseInt(prompt("Enter the number"))
// function calculatesquare(num) {
//     for (i = 0; i < num; i++) {
//         square[i] = i * i
//         squareindex++
//     }
//     return square
// }
// console.log("square of num:-")
// console.log(calculatesquare(num))











//arrow function
let square = [];
squareindex = 0;
let num = parseInt(prompt("Enter the number"))
const calculatesquare = (num) => {
    for (i = 0; i < num; i++) {
        square[i] = i * i
        squareindex++
    }
    return square
}
console.log("square of num:-")
console.log(calculatesquare(num))

