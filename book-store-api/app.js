const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

async function dbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://sisirkumardas1502:ACI3gJlxaD7jcaxN@cluster0.l6mm19o.mongodb.net/bookStore?retryWrites=true&w=majority"
    );
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
  }
}

const router = require("./routes/book-routes");
app.use("/books", router);

dbConnection();

app.listen(8080, () => {
  console.log(`Server listen at port number:8080`);
});
