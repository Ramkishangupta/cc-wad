const express = require("express");
const mongoose = require("mongoose");
const userRoutes=require('./routes/userRoutes')
const app = express();
app.use(express.json());
app.use('/',userRoutes);


mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() =>
    console.log("mongoose connected")
  ).catch((err) => console.log(err));

  app.listen(4000,()=>console.log('server running at http://localhost:4000')
  )