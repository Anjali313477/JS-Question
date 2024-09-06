function num(number) {
    let no = parseInt(prompt("Enter The Number"))
    return number(no)
}

function nextprimenumber(no) {
    for (let i = no + 1; no > 0; i++) {
        let isPrime =true;
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime =false
                break;
            }
        }
        if(isPrime){
            return i;
        }
    }
}


console .log(num(nextprimenumber))