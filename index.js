const person  = require('./data')
const produtos  = require('./data')
const ouputdynamo  = require('./ouput_dynamo.json')

var produtosComReajuste = produtos.map(item => {
  return {
    nome : item.nome,
    preco : item.preco * 1.15
  }
});

console.log(produtosComReajuste)




// console.time('find')
// const search = ouputdynamo.find(element => element.countyName.S === 'RIO GRANDE')
// console.timeEnd('find')
// // console.log(search)






// const names = person.map((pessoa) => pessoa.name)
// console.log(names)


// const search = person.find(person => person.name === 'Felipe')
// console.log(search)

// var total = person.reduce((accumulator, actualValue) =>  accumulator + actualValue.age, 0);

// console.log(total)


// const sumeAge = person.map((pessoa) => pessoa.age).reduce((accumulator, actualValue) => accumulator + actualValue)
// console.log(sumeAge)



let newArray = []

console.time('For')
for (let i = 0; i < ouputdynamo.length; i++) {
  newArray.push(ouputdynamo[i].countyName.S)
}
console.timeEnd('For')

console.time('forIn')
for (let i in ouputdynamo) {
  newArray.push(ouputdynamo[i].countyName.S)
}
console.timeEnd('forIn')


console.time('forOF')
for (const city of ouputdynamo) {
  newArray.push(city.countyName.S)
}
console.timeEnd('forOF')
// console.log(newArray)





console.time('forEach')
ouputdynamo.forEach(element => {
  newArray.push(element.countyName.S)
});
console.timeEnd('forEach')

console.time('map')
const names = ouputdynamo.map(element => element.countyName.S)
console.timeEnd('map')