var http = require('http')

var urls = process.argv.slice(2, process.argv.length);
var strings = new Array(urls.length)
var endedProcesses = 0

urls.forEach(function(url, i) {
  strings[i] = ""
  http.get(url, function(response) {
    response.on("data", function(data) {
      strings[i] += data.toString()
    })
    
    response.on("end", function() {
      endedProcesses += 1
      if(endedProcesses == urls.length) {
        strings.forEach(function(string) {
          console.log(string)
        })
      }
    });
  })
})

/*
var http = require('http')  
var bl = require('bl')  
var results = []  
var count = 0  

function printResults () {  
  for (var i = 0; i < 3; i++)  
    console.log(results[i])  
}  

function httpGet (index) {  
  http.get(process.argv[2 + index], function (response) {  
    response.pipe(bl(function (err, data) {  
      if (err)  
        return console.error(err)  

      results[index] = data.toString()  
      count++  

      if (count == 3)  
        printResults()  
    }))  
  })  
}  

for (var i = 0; i < 3; i++)  
 httpGet(i)
 */