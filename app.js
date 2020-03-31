let http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { "content-Type": "text/plain" });

    switch (req.url) {
        case '/':
            res.end("Bienvenidos a homepage");
            break;
        case '/Productos':
            res.end("Bievenido a productos");
            break;
        case '/Consultas':
            res.end("Bienvenido a atencion al cliente");
            break;
        case '/Locales':
            res.end("Estos son los locales en tu zona");

        default:
            res.end("Error al encontrar la pagina");
            break;
    }

}).listen(3030, "localhost");