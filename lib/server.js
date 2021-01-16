/*
 * manages the server
 */


// Dependencies
const http = require("http");
const config = require("./config");
const expressApp = require("./app");;


const server = {}

server.apps = {
    expressApp
} 


const normalizePort = (port) => {
    const defaultPort = 8080
    port = Number(port)
    port = !isNaN(port) && port >= 0 ? port : defaultPort
    return port;
}

const onError = error => {
    if (error.syscall !== "listen") {
    // ToDo: Needs advanced error logging
      console.log(error)
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
      case "EACCES":
        // ToDo: Needs advanced error logging
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        // ToDo: Needs advanced error logging
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

server.init = (name) => {
    name = typeof(name) == "string" && typeof server.apps[name] == "function" ? name : "expressApp"
    const httpPort = normalizePort(config.httpPort);
    server.httpServer = http.createServer(server.apps[name]);
    server.httpServer.listen(httpPort, () => {
        console.log(`listening on http port ${httpPort} via ${name}`);
    })
    server.httpServer.on("error", onError);
}

module.exports = server
