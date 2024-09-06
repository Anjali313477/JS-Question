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


let evennaturalno = []
let evenindex = 0

function number(num) {
    no = parseInt(prompt("Enter The Number"))
    num(no)
}

function evennumber(no) {
    for (i = 0; i <=no; i++) {
        if (i % 2 == 0) {
            evennaturalno[evenindex] = i
            evenindex++
        }
    }
    for (j = 0; j < evennaturalno.length; j++) {
        console.log(evennaturalno[j])
    }
}

number(evennumber)