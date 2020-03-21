const express = require("express");
const app = express();
const cors = require("cors");
const BodyParser = require("body-parser");

const PORT = 4000;

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));

const { Authrouter, AdminRrouter, UserRouter } = require("./routers");

app.use("/auth", Authrouter);
app.use('/game', AdminRrouter)
app.use('/user', UserRouter)

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Backend Aktif di localhost:${PORT} </h1>`);
});

app.listen(PORT, () => console.log(`backend aktif di port ${PORT}`));
