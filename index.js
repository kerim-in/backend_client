const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { PORT, URL } = require("./config/config");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index"));

async function start() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    app.listen(PORT, () => {
      console.log("Server has been ... " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
