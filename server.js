var express = require('express')
var server = express();

server.use(express.static('web'));

server.get('/', (req,res)=>{
    res.sendFile(__dirname + "/web/1660090.html");
});

server.listen(process.env.PORT ||3000);
console.log('server is running!');
