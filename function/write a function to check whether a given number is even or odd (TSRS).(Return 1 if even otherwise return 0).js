// let number = parseInt(prompt("Enter The Number"))
// function evenodd(number) {
//     if (number % 2 == 0 || number == 0) {
//         return 1
//     } else {
//         return 0
//     }
// }
// console .log(evenodd(number))








//arrow function

let num = parseInt(prompt("Enter The Number"))
const evenodd = (num) => {
    if (num % 2 == 0 || num == 0) {
        return 1
    } else {
        return 0
    }
}

console.log(evenodd(num))