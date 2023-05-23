function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else {
        throw new Error("Negative Error");
    }
}

function abs(a) {
    try {
        return Math.abs(a);
    } catch (e) {
        return e;
    }
}