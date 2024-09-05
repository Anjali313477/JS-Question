// let num = parseInt(prompt("Enter the number"))
// function nextprimenumber(num) {
//     for (let i = num + 1; num > 0; i++) {
//         for (j = 2; j < i; j++) {
//             if (i % 2 !== 0) {
//                 return i
//             }
//         }
//     }
// }
//     console.log(nextprimenumber(num))














//function expression
let num = parseInt(prompt("Enter the number"))
const nextprimenumber = function (num) {
    for (let i = num + 1; num > 0; i++) {
        for (j = 2; j < i; j++) {
            if (i % 2 !== 0) {
                return i
            }
        }
    }
}
console.log(nextprimenumber(num))