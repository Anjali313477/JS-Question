let square = [];
squareindex = 0;

function num(number) {
    let no = parseInt(prompt("Enter The Number"))
    return number(no);
}

function calculatesquare(no){
    for (i = 0; i < no; i++) {
        square[i] = i * i
        squareindex++
    }
    return square
}
console.log("square of num:-")
console.log(num(calculatesquare))