function repeat(string, number) {
    if (number <= 0) {
        return '';
    }

    var repeatedString = '';
    for (var i = 0; i < number; i++) {
        repeatedString += string;
    }

    return repeatedString;
}

console.log(repeat('a', 3));