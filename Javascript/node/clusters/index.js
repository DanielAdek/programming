const cluster = require("cluster");
const os = require("os");
const http = require("http");

if (cluster.isMaster) {

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello world \n");
  }).listen(7090, function () {
    console.log("server started on port: ", 7090)
  })
}