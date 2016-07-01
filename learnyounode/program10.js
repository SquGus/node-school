var net = require('net')

function dateInString(date) {
  var string = "",
      month = date.getMonth()+1,
      day = date.getDate()
  
  string += date.getFullYear() + "-"
  if(month < 10) {
    string += "0" + month + "-"
  } else {
    string += month + "-"
  }
  if(day < 10) {
    string += "0" + day + " "
  } else {
    string += day + " "
  }
  
  string += date.getHours() + ":" + date.getMinutes() + "\n"
  return string
}

var server = net.createServer(function(socket) {
  var dateString = dateInString(new Date())
  console.log(dateString)
  socket.end(dateString)
})

server.listen(process.argv[2])

/*
var net = require('net')  
       
function zeroFill(i) {  
  return (i < 10 ? '0' : '') + i  
}  

function now () {  
  var d = new Date()  
  return d.getFullYear() + '-'  
    + zeroFill(d.getMonth() + 1) + '-'  
    + zeroFill(d.getDate()) + ' '  
    + zeroFill(d.getHours()) + ':'  
    + zeroFill(d.getMinutes())  
}  

var server = net.createServer(function (socket) {  
  socket.end(now() + '\n')  
})  

server.listen(Number(process.argv[2]))
*/