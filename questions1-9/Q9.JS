function camelCase(x) {
    let result = "";

    for (let i = 0; i < x.length; i++) {
        if (x[i] === " ") {
            result += x[i + 1].toUpperCase();
            i++;
        } else {
            result += x[i];
        }
    }

    return result;
}

let y = String(prompt("Enter any text"));
console.log(camelCase(y));