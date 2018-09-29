var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    var url = request.url;
    var content_type = 'text/html';
    let filename = url.slice(1) || 'index.html'
    let pathname = path.resolve(__dirname + '/../src/' + filename);

    if (url.endsWith('.js')) {
        content_type = 'text/javascript';
    } else if (url.endsWith('.jsx')) {
        content_type = 'module';
    }
    else if (url.endsWith('.css')) {
        content_type = 'text/css';
    }
    else if (url.endsWith('.icon')) {
        content_type = 'image/x-icon';
    }
    else if (url.endsWith('.png')) {
        content_type = 'image/jpeg';
    }
    else if (url.endsWith('.json')) {
        content_type = 'text/plain';
        pathname = path.resolve(__dirname + '/../' + filename);
    }


    
    console.log(pathname);

    fs.readFile(pathname, function (err, data) {
        if (err) {
            response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            response.write(err);
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': content_type + '; charset=utf-8'});
            response.write(data);
            response.end();
        }
    })
}).listen(8000);