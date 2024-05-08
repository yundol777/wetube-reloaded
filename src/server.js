import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res, next) => {
  return res.send("I love middleware");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log("Server listening on port http://localhost:4000 🚀");

app.listen(PORT, handleListening);
