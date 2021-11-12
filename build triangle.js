function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// console.log(makeLine(10))


function buildTriangle(length) {
    var triangle = "";
    for (let i = 1; i <= length; i++) {
    triangle += makeLine(i);
}
return triangle
}

console.log(buildTriangle(10))

