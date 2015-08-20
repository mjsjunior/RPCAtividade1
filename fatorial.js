var url = require("url");
var math = require('mathjs');
exports.fatorial=function(req,res,params){

    console.log("Fatorial");
    console.log(params);
    var n1 =  parseInt(params.n1)
   
  
    var resultado = math.factorial(n1)
    res.end("Fatorial: "+resultado);

     	res.writeHead(200, {'Content-Type': 'text/plain'});
   	res.end(''+resultado+'');
  









}
