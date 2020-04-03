const person  = require('./data')
const ouputdynamo  = require('./ouput_dynamo.json')

let newArrayFor = []


console.time('For')
for (let i = 0; i < ouputdynamo.length; i++) {
  if(ouputdynamo[i].countyName.S === 'RIO GRANDE') {
    newArrayFor.push(ouputdynamo[i])
  }
}
console.timeEnd('For')


console.time('forEach')
let newArray = []
ouputdynamo.forEach(element => {
  if(element.countyName.S === 'RIO GRANDE') {
    return newArray.push(element)
  }  
});
console.timeEnd('forEach')


console.time('find')
const search = ouputdynamo.find(element => element.countyName.S === 'RIO GRANDE')
console.timeEnd('find')
// console.log(search)

console.time('map')
const names = ouputdynamo.map(element => element.countyName.S)
console.timeEnd('map')
// console.log(names)




// const names = person.map((pessoa) => pessoa.name)
// console.log(names)


// const search = person.find(person => person.name === 'Felipe')
// console.log(search)

// var total = person.reduce((accumulator, actualValue) =>  accumulator + actualValue.age, 0);

// console.log(total)


// const sumeAge = person.map((pessoa) => pessoa.age).reduce((accumulator, actualValue) => accumulator + actualValue)
// console.log(sumeAge)