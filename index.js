require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

/* VARIABLES */
const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;

/* EXPRESS APP */
const app = express();

/* MIDDLEWARES */
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

/* TEST API */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Tech Alpha Server" });
});

/* DATABASE */
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port:${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
