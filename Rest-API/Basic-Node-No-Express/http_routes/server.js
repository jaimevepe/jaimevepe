const server = require("http").createServer(); // to create the server
const fs = require("fs") // file system
const data = require("./pets.json")

const port = process.env.PORT || 3000;

server.on("request", (req, res) => {
    switch (req.url) {
			  case "/api":
					res.writeHead(200, {"content-type": "application/json"})
					res.end(JSON.stringify(data))
        case "/home":
        case "/about":
				case "/contact":
          res.writeHead(200, {"content-type": "text/html"});
					res.end(fs.readFileSync(`.${req.url}.html`));
				case "/":
				 res.writeHead(301, {"Location": "/home"})
				 res.end();
        default:
				 res.writeHead(404)
				 res.end("This page does not exist")
           break;
    }
});

server.listen(port, () => {
    console.log("server.js is running on port, ", port)
})