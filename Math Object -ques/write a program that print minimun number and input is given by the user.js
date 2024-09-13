let userinput=parseInt(prompt("How many numbers you want to input ?"))
let number=[]
for(let i=0;i<userinput;i++){
    number[i]=parseInt(prompt(`Enter the ${i+1} num`))
}
console.log(`The minimum number is ${Math.min(...number)}`)