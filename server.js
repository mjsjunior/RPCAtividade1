var http_port = 8710;
var http = require("http");
var url = require("url");
 
var server = http.createServer(function(req,res)
                {
                    params = url.parse(req.url, true).query
                    if (url.parse(req.url).pathname=="/")
                    {
                        require("./index").get(req,res);
                    }else if(url.parse(req.url).pathname=="/soma"){
 							require("./soma").soma(req,res,params);
 					}else if(url.parse(req.url).pathname=="/fatorial"){
 							require("./fatorial").fatorial(req,res,params);
		   			}else if(url.parse(req.url).pathname=="/exponenciacao"){
 							require("./exponenciacao").exponenciacao(req,res,params);
 					}
                });
server.listen(http_port);
console.log("listening to http://localhost:"+http_port);
