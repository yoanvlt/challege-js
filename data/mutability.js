const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const clone = Object.assign({}, person)

const clone2 = Object.assign({}, person)

const samePerson = person === person