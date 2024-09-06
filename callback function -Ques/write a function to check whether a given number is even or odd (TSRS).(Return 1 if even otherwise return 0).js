function number(num) {
    let no = parseInt(prompt("Enter The Number"))
    return num(no)
}

function evenodd (no){
    if (no % 2 == 0 || no == 0) {
        return 1
    } else {
        return 0
    }
}
console.log(number(evenodd))