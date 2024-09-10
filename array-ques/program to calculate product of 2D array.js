let matrics1 = [
    [1, 2, 3],
    [2, 2, 1],
    [1, 4, 1]
]

let matrics2 = [
    [1, 2, 1],
    [10, 2, 3],
    [10, 4, 10]
]

let matrics3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


document.write("matrics 1 :-")
document.write("<table border = '1px' cellspaceing ='0'>")
for (let i = 0; i < matrics1.length; i++) {
    document.write("<tr>")
    for (let j = 0; j < 3; j++) {
        document.write("<td>" + matrics1[i][j] + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")


document.write("matrics 2 :-")
document.write("<table border = '1px' cellspaceing ='0'>")
for (let i = 0; i < matrics2.length; i++) {
    document.write("<tr>")
    for (let j = 0; j < 3; j++) {
        document.write("<td>" + matrics2[i][j] + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")



for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrics3[i][j] = matrics1[i][j] * matrics2[i][j]
    }
}



document.write("product of two matrics are :-")
document.write("<table border = '1px'cellspacing='0'>");
for (let i = 0; i < matrics3.length; i++) {
    document.write("<tr>")
    for (j = 0; j < 3; j++) {
        document.write("<td>" + matrics3[i][j] + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")