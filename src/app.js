const express = require("express");
const app = express();
const noteRoute = require("./routes/note.route");
const userRoute = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

app.get("/", (req, res, next) => {
  res.json("Welcome");
});
app.get("/about", (req, res, next) => {
  res.json("About us");
});
app.use("/notes", noteRoute);
app.use("/users", userRoute);

app.use((req, res, next) => {
  res.status(404).send("Endpoint not found");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error_message: err
  });
});

const http = require("http");
const server = http.createServer(app);
const db = require("./databases/mysql/config.js");

db.initTables();

server.listen(process.env.PORT || 3000, () => {
  console.log("Node API is running on port 3000");
});
