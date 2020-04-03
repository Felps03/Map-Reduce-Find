const { person, produtos }  = require('./data')

const ouputdynamo  = require('./ouput_dynamo.json')

// map, reduce e find

let produtosComReajuste = produtos.map(item => {
  return {
    nome: item.nome,
    preco: (item.preco * 1.15).toFixed(2)
  } 
})

// console.log(produtosComReajuste)

const personName = person.map(element => element.name)

console.log(personName)

let sumeAge = person.reduce((accumulator, actualValue) => accumulator + actualValue.age, 0)
console.log(sumeAge)

const search = person.find(element => element.name === 'Angel')
console.log(search)

let newArray = []

console.time('for')
for (let index = 0; index < ouputdynamo.length; index++) {
  newArray.push(ouputdynamo[index].countyName.S)
}
console.timeEnd('for')

console.time('forIn')
for (const i in ouputdynamo) {
  newArray.push(ouputdynamo[i].countyName.S)
}
console.timeEnd('forIn')


console.time('forOF')
for (const city of ouputdynamo) {
    newArray.push(city.countyName.S)
}
console.timeEnd('forOF')

console.time('forEach')
ouputdynamo.forEach(element => {
  newArray.push(element.countyName.S)
});
console.timeEnd('forEach')

console.time('map')
const nameCity = ouputdynamo.map(element => element.countyName.S)
console.timeEnd('map')

