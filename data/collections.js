function arrToSet (arr) {
  return new Set(arr)
}

console.log(arrToSet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function arrToStr (arr) {
  return arr.join('')
}

console.log(arrToStr(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']))

function setToStr (set) {
  return [...set].join('')
}

console.log(setToStr(new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])))

function setToArr (set) {
    return [...set]
}

console.log(setToArr(new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])))

function strToArr (str) {
  return str.split('')
}

console.log(strToArr('abcdefghij'))

function strToSet (str) {
    return new Set(str.split(''))
}

console.log(strToSet('abcdefghij'))

function objToArr (obj) {
    return Object.entries(obj)
}

console.log(objToArr({a: 1, b: 2, c: 3, d: 4, e: 5}))

function mapToObj (map) {
    return Object.fromEntries(map)
}

console.log(mapToObj(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])))

function objToMap (obj) {
    return new Map(Object.entries(obj))
}

console.log(objToMap({a: 1, b: 2, c: 3, d: 4, e: 5}))

function arrToObj (arr) {
    return Object.fromEntries(arr)
}

console.log(arrToObj([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]))

function strToObj (str) {
    return Object.fromEntries(str.split(''))
}

console.log(strToObj('abcde'))