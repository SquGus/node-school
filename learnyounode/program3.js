var fs = require('fs')
var file = fs.readFileSync(process.argv[2])

file = file.toString()
file = file.split(/\n/)
console.log(file.length - 1);

/*
var fs = require('fs')  

var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)
*/