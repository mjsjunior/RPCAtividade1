var url = require("url");
var math = require('mathjs');
exports.fatorial=function(req,res,params){

    console.log("Fatorial");
    console.log(params);
    var n1 =  parseInt(params.n1)
   
    res.writeHead(200, { 'Content-Type':'text/html' });
    var resultado = math.factorial(n1)
    res.write("Fatorial: "+resultado);
}
