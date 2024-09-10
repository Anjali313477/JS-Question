let matrics=  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

document.write("The given matrics are:-")
document.write("<table border = '1px'cellspacing ='0'>")
for (i = 0; i < matrics.length; i++) {
    document.write("<tr>")
    for (j = 0; j < 3; j++) {
        document.write("<td>" + matrics[i][j] + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")



document.write("The inverse of given matrics is:- ")
document.write("<table border ='1px cellspacing='0")
for (let i = 0; i <matrics.length; i++) {
    document.write("<tr>")
    for (let j = 2; j>=0; j--) {
        document.write("<td>" + matrics[i][j]+ "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")