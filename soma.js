var url = require("url");

exports.soma=function(req,res,params)
{

    var n1 =  parseInt(params.n1)
    var n2 =  parseInt(params.n2)
    var resultado = n1+n2;
   	res.writeHead(200, {'Content-Type': 'text/plain'});
   	res.end(''+resultado+'');
}
