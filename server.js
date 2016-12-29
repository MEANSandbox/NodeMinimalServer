var express = require('express');
var app = express();
app.set('port',3000);

app.get('/',function(req,res){
    res.send('Hello World');
})

app.listen(app.get('port'),function(){
    console.log('app is running at port no 3000')
})