var cc = require('./cc.json');
const fs = require('fs')


let morphed = {}

cc.forEach(obj => {
    morphed[`+${obj.dial_code.replace(' ', '')}`] = {name: obj.name, code: obj.code}
})

console.log(morphed)

morphed = JSON.stringify(morphed, null, 2)

fs.writeFileSync('cc-map.json', morphed)
