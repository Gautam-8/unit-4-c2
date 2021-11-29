const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


const connect = () =>{
 return mongoose.connect("mongodb://localhost:27017/jobs" ,{useNewUrlParser: true,  useUnifiedTopology: true})
}





app.listen(4444, async () =>{
    await connect();
    console.log("listening 4444 port")
})