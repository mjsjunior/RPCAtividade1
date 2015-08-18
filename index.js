var fs = require("fs");

exports.get=function(req,res)
{
    
    fs.readFile('index.html', function(erro,arquivo){
    	res.writeHead(200, { 'Content-Type':'text/html' });
    	res.write(arquivo);
    	res.end(); 
    });
}
