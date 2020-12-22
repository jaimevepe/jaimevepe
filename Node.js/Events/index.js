// simple events emitter / methods/ 
const EventEmitter = require("events") // custom event emitters

// make our own custom class of event emitter
class Withlog extends EventEmitter {
    // Method
    execute(taskFunc){
        this.emit("Hello There")
        taskFunc() // executing myFunc()
        this.emit("Later bitch")
    }
}

// make new instance of withlog
const withLog = new Withlog()

// Event listeners
withLog.on("Hello There", () => console.log("Hellooooo"));
withLog.on("Later bitch", () => console.log("Bye biiiiitch"));

// myFunc gets passed through execute(taskFunc) = myFunc
const myFunc = () => console.log("*** Executing something ***")

withLog.execute(myFunc)