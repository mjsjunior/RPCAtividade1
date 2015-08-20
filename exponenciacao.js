var url = require("url");
var math = require('mathjs');

exports.exponenciacao=function(req,res,params){



    console.log("Exponenciação ");
    console.log(params);
    var n1 =  parseInt(params.n1)
    var n2 =  parseInt(params.n2)
   
    var resultado = math.pow(n1,n2)
    res.writeHead(200, {'Content-Type': 'text/plain'});
   	res.end(''+resultado+'');
}
