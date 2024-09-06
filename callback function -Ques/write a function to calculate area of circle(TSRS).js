function getRadius(callback) {
    let radius = parseInt(prompt("Enter the radius"));
    return callback(radius);
}

function areaofcircle(radius) {
    const area = 3.14 * (radius * radius);
    return area;
}

console.log(getRadius(areaofcircle));