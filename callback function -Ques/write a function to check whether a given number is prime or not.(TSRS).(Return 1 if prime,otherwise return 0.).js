function num(number) {
    let no = parseInt(prompt("Enter The Number"))
    return number(no)
}
function primeno(no) {
    if (no <= 1) {
        return 0
    }
    for (let i = 2; i < no; i++) {
        if (no % i == 0) {
            return 0
        }
    }
    return 1
}

console.log(num(primeno))