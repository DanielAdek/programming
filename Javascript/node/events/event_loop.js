const crypto = require("crypto");
const https = require("https");
const fs = require("fs");

const start = Date.now();

const doRequest = (time) => {
  https.request("https://www.google.com", res => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log("Net: ", Date.now() - time);
    })
  }).end()
}

const doHash = (time) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash: ", Date.now() - time);
  })
}

doRequest(start);

fs.readFile("event_loop.js", "utf-8", () => {
  console.log("FS: ", Date.now() - start);
});

doHash(start)
doHash(start)
doHash(start)
doHash(start)

