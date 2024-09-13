let userinput = parseInt(prompt("How many number you want to put as input?"))
let number = []
for (let i = 0; i <userinput; i++) {
 number[i]=parseInt(prompt(`Enter the ${i+1} number`))
}
console.log(`The maximum value is ${Math.max(...number)}`)