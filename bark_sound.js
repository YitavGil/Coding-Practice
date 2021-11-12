let sound = ""

const barkAlong = function (num) {
    for (let i = 1; i<=num; i++) {
        sound = sound + "Woof ";

    }
    return sound + "!"
}

console.log(barkAlong(10))


