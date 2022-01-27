var exp=require('express');
var app=exp();

app.listen(8081,function(){
	console.log("Server Created");
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/Login.html");
});

app.get('/msg',function(req,res){
	res.send("<h3>Welcome : "+req.query.name+"</h3>");
});

app.all('*',function(req,res){
	res.send("Invalid url");
});