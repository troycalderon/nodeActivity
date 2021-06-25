var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 3000

const express = require("express");

const app = express();
const port = 6969;

app.listen(port, () => {
  console.log("Listening at http://localhost:$[port]");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.post("/home", function (req, res) {
  res.send("yea its pretty cool");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.post("/about", function (req, res) {
  res.sendStatus(401);
});
