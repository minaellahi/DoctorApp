const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//rest obejct
const app = express();

//dotenv conig
dotenv.config();

connectDB();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

app.use('/api/v1/user', require('./routes/userRoutes'));

//port
const port = process.env.PORT || 8000;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
