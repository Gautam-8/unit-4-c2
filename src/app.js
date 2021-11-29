const express = require("express");

const app = express();
app.use(express.json());

const connect = require("./config/db")


const jobcontroller = require("./controllers/job.controller");
const companycontroller = require("./controllers/company.controller");
const mostcontroller = require("./controllers/most.controller");

app.use("/companies", companycontroller);
app.use("/most", mostcontroller);
app.use("/jobs" ,jobcontroller);



app.listen(4444, async () =>{
    await connect();
    console.log("listening 4444 port")
})