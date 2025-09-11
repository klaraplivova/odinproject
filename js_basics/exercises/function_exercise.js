function add7 (num) {
    return num + 7;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function capitalise (string) {
    string = string.toLowerCase()
    firstLetter = string.at(0)
    firstLetterUpper = string.at(0).toUpperCase()
    return string.replace(firstLetter, firstLetterUpper)
}

function capitalise2 (string) {
    if (!string) return "";
    string = string.toLowerCase();
    return string[0].toUpperCase() + string.slice[1]
}

function lastLetter (string) {
    if (!string) return "";
    length = string.length;
    length = length - 1;
    return string.charAt(length);
}

