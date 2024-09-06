function number(num) {
    let num1 = parseInt(prompt("Enter The First Number"))
    let num2 = parseInt(prompt("Enter The Second Number"))
     num(num1, num2)
}
function primenumber(num1, num2) {
    for (let i = num1 + 1; i < num2; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime && i > 1) {
            document.write(i)
        }
    }
}
number(primenumber)
