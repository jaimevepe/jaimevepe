const server = require("http").createServer(); // to create the server
const fs = require("fs") // file system

const port = process.env.PORT || 3000;

// server.on("request", (req, res) => {
//     res.writeHead(200, {"content-type": "text/plain"});
//     res.end("Hello World\n");
// })
console.log(fs.readFileSync("./index.html").toString())

server.on("request", (req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync("./index.html").toString());
})

server.listen(port, () => {
    console.log("server.js is running on port, ", port)
})