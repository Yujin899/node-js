const {readFileSync , writeFileSync} = require("fs")

console.log("start");
const test = readFileSync("./content/child/test.txt" , "utf8")

console.log(test)

const first = readFileSync("./content/first.txt" , "utf8")

console.log(first)

const second = readFileSync("./content/second.txt" , "utf8")

console.log(second)


writeFileSync("./content/child/test.txt" , "-----hello from app.js" , {flag: "a"})
writeFileSync("./content/first.txt" , "----hello from app.js" , {flag: "a"})
writeFileSync("./content/second.txt" , "-----hello from app.js" , {flag: "a"})

console.log("done with this task");
console.log("starting with new task...")


