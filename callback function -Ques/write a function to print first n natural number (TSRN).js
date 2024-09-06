function number(num) {
    let no = parseInt(prompt("Enter the number"))
    num(no)
}

function printnaturalnumber(no){
    for(i=1;i<=no;i++){
        console.log(i)
    }
}

number(printnaturalnumber)