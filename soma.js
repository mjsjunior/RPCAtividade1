var url = require("url");

exports.soma=function(req,res,params)
{
     console.log(params);
     var n1 =  parseInt(params.n1)
     var n2 =  parseInt(params.n2)
    
    res.writeHead(200, { 'Content-Type':'text/html' });
    var resultado = n1+n2;
    res.write("Soma: "+resultado);
}
