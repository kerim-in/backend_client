const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const app = express();

app.use(cors());
app.use(morgan())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index'))


async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://kerim:API12345@cluster0.zyuvf.mongodb.net/hospitallBD",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(5001, () => {
      console.log("Server has been ... 5001");
    });
  }
  catch (e) {
    console.log(e);
  }
}

start();
