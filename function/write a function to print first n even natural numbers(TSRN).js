// let evennaturalno = []
// let evenindex = 0
// let number = parseInt(prompt("Enter The num"))
// function evenno(number) {

//     for (i = 0; i <= number; i++) {
//         if (i % 2 == 0) {
//             evennaturalno[evenindex] = i
//             evenindex++
//         }
//     }
//     for (j = 0; j < evennaturalno.length; j++) {
//         console.log(evennaturalno[j])
//     }
// }

// evenno(number)







//arrow function
let evennaturalno = []
let evenindex = 0
let number = parseInt(prompt("Enter the number"))
const evenno = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            evennaturalno[evenindex] = i
            evenindex++
        }
    }
    for (j = 0; j < evennaturalno.length; j++) {
        console.log(evennaturalno[j])
    }
}

evenno(number)