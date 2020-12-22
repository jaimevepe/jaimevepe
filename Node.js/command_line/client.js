// to listen to emit events
const EventEmitter = require("events");
// read input from user
const readLine = require("readline");
// imported server-class FROM Server.js
const server = require("./server")(client);

// make cliet with a new emitter
// dont need to extend, very simple emitter
const cliet = new EventEmitter();

const rl = readLine.createInterface({
    input: process.stdin, // get data from the command line
    output: process.stdout // to spit out the data from command line
})

server.on("response", resp => {
    process.stdout.write(resp);
})