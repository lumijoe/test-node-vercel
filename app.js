// app.js 
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./views/index.ejs', 'utf-8');

var server = http.createServer(getFromClient);

server.listen(3001);
console.log('Server start!');

// ここまでメインプログラム========

// createServerの処理
function getFromClient(request, response) {
    var content = ejs.render(index_page, {
        title: "app.jsでindex.ejsを読み込んでます",
        content: "コンテンツ"
    });
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
}
