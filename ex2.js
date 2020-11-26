function hasOwnProp(str, obj) {
    return obj.hasOwnProperty(str)
}


// test
const x = {
    color: 'green',
    weight: 10,
    awesome: false
}

console.log(hasOwnProp('color', x))
console.log(hasOwnProp('height', x))
