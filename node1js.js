var http=require('http');


var ser=http.createServer(function(req,res){

res.writeHead(200,{'Content-Type';'text/html'});
res.write("<h1> welcome to node </h1>");
console.log("hello");
res.end();
}
};
console.log("server started on 9000");
ser.listen(9000);