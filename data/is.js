var is = {}

is.num = function (value) {
    return typeof value === 'number'
}

is.str = function (value) {
    return typeof value === 'string'
}

is.bool = function (value) {
    return typeof value === 'boolean'
}

is.undef = function (value) {
    return typeof value === 'undefined'
}

is.def = function (value) {
    return typeof value !== 'undefined'
}

is.arr = function (value) {
    return Array.isArray(value)
}

is.obj = function (value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
}

is.fun = function (value) {
    return typeof value === 'function'
}

is.truthy = function (value) {
    return !!value
}

is.falsey = function (value) {
    return !value
}