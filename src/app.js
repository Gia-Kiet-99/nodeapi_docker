const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

app.get("/", (req, res, next) => {
  res.json("Welcome");
});

app.get("/users", (req, res, next) => {
  res.send("Function under development");
});

app.get("/about", (req, res, next) => {
  res.json("About us");
});

app.use((req, res, next) => {
  res.status(404).send("Endpoint not found");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong!!!");
});

const http = require("http");
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Node API is running on port 3000");
});
