const http = require("http");
const fs = require("fs");
const PORT = 8000;

let dat = Date();
fs.writeFileSync("dateTime/sample.txt", dat);

http
  .createServer((req, res) => {
    fs.readFile("dateTime/sample.txt", (err, data) => {
      res.writeHeader(200, ["content-type", "text/html"]);
      res.write(data);
      res.end();
    });
  })
  .listen(PORT, () => {
    console.log("Listening to ", PORT);
  });
