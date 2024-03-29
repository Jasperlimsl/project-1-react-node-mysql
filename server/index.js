const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());

// you need cors to whitelist your API so that the connection works between the server and react app that are both running on your localhost (computer)
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});