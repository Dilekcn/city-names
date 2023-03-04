const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.db_connection, {
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const cityRouter = require("./routes/cityname");

app.use("/city", cityRouter);

app.get("/", (req, res) => res.send("Hello Cities!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
