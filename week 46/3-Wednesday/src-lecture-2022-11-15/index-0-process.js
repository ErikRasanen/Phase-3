// const process = require('process')

// console.log("Arg length: ", process.argv.length)
// console.log("First arg: ", process.argv[0])//   'C:\\Program Files\\nodejs\\node.exe'
// console.log("Second arg: ", process.argv[1])//  'C:\\Users\\Sami\\Documents\\dev\\TIVI\\Lectures\\Week46\\workspace\\demo\\index-0-process.js'
// console.log("Second arg: ", process.argv[2])// '45'
// console.log(process.argv)


//  node .\index-0-process.js   Rami 24 true
const [node, script, username, age, isMember] = process.argv;

console.log(node); 
console.log(script); 
console.log(username); 
console.log(age); 
console.log(isMember); 