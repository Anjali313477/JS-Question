function userinput(number) {
    let num1 = parseInt(prompt("Enter The Number"))
    return number(num1)
}

function armstrongnumber(num1) {
    let sum = 0;
    let lengthofdigit = 0;
    let temp = num1;
    while (temp > 0) {
        temp = parseInt(temp/10)
        lengthofdigit++
    }
    let container=num1
    while(container>0){
        const digit=container%10;
        sum=sum+digit**lengthofdigit
        container=parseInt(container/10)
    }
    if(sum==num1){
        console.log(`${num1} is an armstrong number`)
    }else{
        console.log(`${num1}is not an armstrong number`)
    }
}

userinput(armstrongnumber)