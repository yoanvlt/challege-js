function words(string) {
    return string.split(' ');
}

function sentences(array) {
    return array.join(' ');
}

function yell(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
  

var strings = ['Hello', 'world', '!', 'This', 'is', 'a', 'sentence.'];
var result = sentences(strings);
console.log(result); 
  
