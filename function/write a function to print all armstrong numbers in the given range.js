// let startno = parseInt(prompt("enter the first number"))
// let endno = parseInt(prompt("enter the lst no"))
// function printarmstrong(startno,endno){
// for (let i = startno; i <= endno; i++){

//     let container = i;
//     let sum = 0;
//     let numDigits = 0;
//     let temp = i;


//     while (temp > 0) {
//         temp = parseInt(temp / 10);
//         numDigits++;
//     }

//     container = i; 
//     while (container > 0) {
//         const digit = container % 10;
//         sum += digit ** numDigits;
//         container = parseInt(container / 10);
//     }

//     if (sum === i) {
//         console.log(i);
//    }

// }
// }

// printarmstrong(startno,endno)









// function expression
let startno = parseInt(prompt("enter the first number"))
let endno = parseInt(prompt("enter the last no"))

const printarmstrong = function (startno, endno) {
    for (let i = startno; i <= endno; i++) {

        let container = i;
        let sum = 0;
        let numDigits = 0;
        let temp = i;
    
    
        while (temp > 0) {
            temp = parseInt(temp / 10);
            numDigits++;
        }
    
        container = i; 
        while (container > 0) {
            const digit = container % 10;
            sum += digit ** numDigits;
            container = parseInt(container / 10);
        }
    
        if (sum === i) {
            console.log(i);
       }
    
    }
    }
    
    printarmstrong(startno,endno)