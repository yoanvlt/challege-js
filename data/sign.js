function sign (num) {
    if (num === 0) {
        return 0
    }
    if (num > 0) {
        return 1
    }
    if (num < 0) {
        return -1
    }
}

function sameSign (a, b) {
    if (sign(a) === sign(b)) {
        return true
    } else {
        return false
    }
}

