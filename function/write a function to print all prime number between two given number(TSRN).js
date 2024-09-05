
// function primenobtwn(startno, endno) {
//     for (let i = startno + 1; i < endno; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime && i > 1) {
//             document.write(i + "<br>");
//         }
//     }
// }


// let startno = parseInt(prompt("Enter the first number"));
// let endno = parseInt(prompt("Enter the second number"));

// primenobtwn(startno, endno);














//function expresiion

let startno = parseInt(prompt("Enter the first number"));
let endno = parseInt(prompt("Enter the second number"))

const primenumberbetween = function (startno, endno) {
    for (let i = startno + 1; i < endno; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            document.write(i + "<br>");
        }
    }
}
primenumberbetween(startno, endno);






