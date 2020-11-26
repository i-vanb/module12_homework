function getOwnProps(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) console.log(key, '-', obj[key])
    }
}

// test
const x = {
    color: 'green',
    weight: 10,
    awesome: false
}

getOwnProps(x)
