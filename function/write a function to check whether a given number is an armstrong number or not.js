let number = parseInt(prompt("Enter the number"));

function armstrongno(number) {
    let sum = 0;
    let numDigits = 0;
    let temp = number;


    while (temp > 0) {
        temp = parseInt(temp / 10);
        numDigits++;
    }

    container = number;
    while (container > 0) {
        const digit = container % 10;
        sum = sum + digit ** numDigits
        container = parseInt(container / 10);
    }

    if (sum === number) {
        console.log(number + " is an armstrong number");
    } else {
        console.log(number + " is not an armstrong number");
    }
}

armstrongno(number);




// function expression

// let number = parseInt(prompt("Enter The number"))
// let armstrongno = function (number) {
//     let sum = 0;
//     let numDigits = 0;
//     let temp = number;


//     while (temp > 0) {
//         temp = parseInt(temp / 10);
//         numDigits++;
//     }

//     container = number;
//     while (container > 0) {
//         const digit = container % 10;
//         sum = sum + digit ** numDigits
//         container = parseInt(container / 10);
//     }

//     if (sum === number) {
//         console.log(number + " is an armstrong number");
//     } else {
//         console.log(number + " is not an armstrong number");
//     }
// }

// armstrongno(number);







