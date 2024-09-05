let number = parseInt(prompt("Enter the number"))
function prime(number) {
    if (number <= 1) {
        return 0
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return 0
        }
    }
    return 1
}

console.log(prime(number))











// Whithout function

// let number = parseInt(prompt("Enter The Number"))

// if (number == 1) {
//     document.write(number + " is neither a prime nor composite ")
// } else if (number < 1) {
//     document.write(number + "is not a prime number")

// } else if (number == 2) {
//     document.write(number + "is a prime number")
// } else {
//     isprime = true;
//     for (i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isprime = false
//             break;
//         }
//     }

//     if (isprime) {
//         document.write(number + " is a prime number")
//     } else {
//         document.write(number + " is not a prime number")
//     }
// }










//function expression


// let number = parseInt(prompt("Enter The Number"))
// const primenumber = function (number) {
//     if (number <= 1) {
//         return 0
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             return 0
//         }
//     }
//     return 1

// }

// console.log(primenumber(number))
