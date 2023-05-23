obj = {

    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10

}

function getAcceleration (obj) {
    if (obj.Δt <= 0) {
        return "impossible"
    }
    return obj.Δv / obj.Δt
}

console.log(getAcceleration(obj))