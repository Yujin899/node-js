// const names = require('./testing')
const names = require('./names')
const greeting = require("./fc")
const data = require("./alternative")

console.log(names.items[0] + "-" + names.items[1])
console.log(names.john + "-" + names.kareem)

console.log("#".repeat(40))

greeting.sayHi()
greeting.saybye()

console.log("#".repeat(40))

console.log(data.john)
console.log(data.kareem)
console.log(data.sayHi())
console.log(data.items)




