const path = require('node:path'); 



const bPath = path.basename("/content" + path.sep + "child" +  path.sep + "test.txt")

const rPath = path.join("/content" , "child" , "test.txt")

console.log(bPath)

console.log(rPath)


const absolute = path.join(__dirname ,"/content" , "child" , "test.txt")

console.log(absolute)

console.log(path.isAbsolute(bPath))
console.log(path.isAbsolute(rPath))