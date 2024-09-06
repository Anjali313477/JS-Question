function getRadius(Callback) {
    let radius = parseInt(prompt("Enter the radius"))
    return Callback(radius)
}

function calculatecircumferenceofcircle(radius) {
    calculate = 2 * 3.14 * radius
    return calculate

}

console.log(getRadius(calculatecircumferenceofcircle))