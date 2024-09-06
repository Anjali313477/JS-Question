function num(number) {
    let no = parseInt(prompt("Enter The Number"))
    return number(no)
}

function calculatefactorial(no) {
    let fact = 1
    for (i = 1; i <= no; i++) {
        fact = fact * i
    }
    return fact
}

console.log(num(calculatefactorial))