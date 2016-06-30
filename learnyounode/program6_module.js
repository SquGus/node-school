var fs = require('fs')
var path = require('path')

var listOfFiles = []

module.exports = function(directory, extension, callback) {
  var ext = "." + extension
  fs.readdir(directory, function(err, list) {
    if(err) return callback(err)
    list.forEach(function(file) {
      if(ext === path.extname(file)) {
        listOfFiles.push(file);
      }
    })
    return callback(null, listOfFiles)
  })
}

/*
var fs = require('fs')  
var path = require('path')  

module.exports = function (dir, filterStr, callback) {  

  fs.readdir(dir, function (err, list) {
    if (err)  
      return callback(err)  

    list = list.filter(function (file) {  
      return path.extname(file) === '.' + filterStr  
    })  

    callback(null, list)  
  })
}
*/