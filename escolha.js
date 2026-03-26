import { createServer } from "http";
import { parse } from "url";
import { readFile } from "fs";

createServer(
    function (req, res) {
        let q = parse(req.url, true);
        let filename = "./mod2/" + q.pathname;
        console.log(q);
        console.log(filename);

        readFile(filename, function(erro, data) {
            console.log(erro);
            if (erro) {
                res.writeHead(404, {'content-type': 'text/html'});
                return res.end("404 not found");
            }
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
).listen(8080)