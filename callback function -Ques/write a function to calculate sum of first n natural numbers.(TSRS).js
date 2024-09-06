let add = 0;
function number(num) {
    let no = parseInt(prompt("Enter the Numbers"))
    return num(no)
}

function sumofnaturalnumber(no) {
    while (no > 0) {
        rem = no % 10
        no = parseInt(no / 10)
        add = add + rem
    }
    return add;
}
console.log(number(sumofnaturalnumber))