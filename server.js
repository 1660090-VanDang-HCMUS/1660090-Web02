// var http = require('http');
// var fs = require('fs');
 
// // Bước 2: Khởi tạo server
// var server = http.createServer(function(request, response){
//     // Biến request: là biến lưu trữ thông tin gửi lên của client
//     // Biến response: là biến lưu trữ các thông tin trả về cho client
     
//     // Kiểm tra URL truy cập phải trang about ko
//     if (request.url == '/1660090.html')
//     {
//         // Thiết lập Header
//         response.writeHead(200, {
//             "Context-type" : "text/html"
//         });
         
//         // Show thông tin trang about
//         fs.createReadStream('./1660090.html').pipe(response);
//     }
//     else // trường hợp ngược lại ko tìm thấy file
//     {
//         // Thiết lập Header
//         response.writeHead(404, {
//             "Context-type" : "text/plain"
//         });
         
//         // Show lỗi không tìm thấy trang
//         response.write('404 Not Found ' + request.url);
         
//         // Kết thúc
//         response.end();
//     }
// });
 
// // Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
// server.listen(3000, function(){
//     console.log('Connected Successfull!');
// });


const express = require('express')
const server = express();
const port = 3000;

server.use(express.static('web'))

server.get('/', (req,res)=>{
    res.sendFile(__dirname + "/web/1660090.html");
});

server.listen(port);
console.log('server is running!');
