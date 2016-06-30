var http = require('http')
var url = process.argv[2]

http.get(url, function(response) {
  var quantity = 0,
      string = ""
  
  response.on("data", function(data) {
    string += data
  })
  
  response.on("end", function() {
    quantity = string.length
    console.log(quantity)
    console.log(string)
  })
})

/*
var http = require('http')  
var bl = require('bl')  

http.get(process.argv[2], function (response) {  
  response.pipe(bl(function (err, data) {  
    if (err)  
      return console.error(err)  
    data = data.toString()  
    console.log(data.length)  
    console.log(data)  
  }))    
})
*/