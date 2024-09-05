// let add=0;
// let number = parseInt(prompt("Enter the natural numbers"))
// function sum(number) {
//     while (number > 0) {
//         rem = number % 10
//         number = parseInt(number / 10)
//         add = add + rem
//     }
//     return add;
//  }

// console.log(sum(number))






// arrow function


let add = 0;
let number = parseInt(prompt("Enter the natural numbers"))
const sum = (number) => {
    while (number > 0) {
        rem = number % 10
        number = parseInt(number / 10)
        add = add + rem
    }
    return add;
}
console.log(sum(number))

