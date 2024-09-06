function userinput(number) {
    startnumber = parseInt(prompt("Enter The First Number"))
    Endnumber = parseInt(prompt("Enter The Second Number"))
     number(startnumber, Endnumber)
}

function armstrongnumber(startnumber, Endnumber) {
    for (i = startnumber; i <= Endnumber; i++) {
        let numberofdigit = 0;
        let sum = 0;
        let temp = i

        while (temp > 0) {
            temp = parseInt(temp / 10)
            numberofdigit++
        }
        container = i
        while (container > 0) {
            const digit = container % 10
            sum = sum + digit ** numberofdigit
            container = parseInt(container / 10)
        }
        if(sum==i){
            console.log(i)
        }
    }
}
userinput(armstrongnumber)