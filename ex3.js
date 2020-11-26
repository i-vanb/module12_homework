function createObjWithoutProto() {
    return Object.create(null)
}


// test

const obj1 = {}
const obj2 = createObjWithoutProto()

console.log(obj1)
console.log(obj2)
