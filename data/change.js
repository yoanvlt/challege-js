const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}

function get (obj, key) {
    return obj[key]
}

function set (key, value) {
    sourceObject[key] = value
    return sourceObject
}

console.log(get(sourceObject, 'num'))
