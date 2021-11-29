const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


const connect = () =>{
 return mongoose.connect("mongodb://localhost:27017/work" ,{useNewUrlParser: true,  useUnifiedTopology: true})
}

const jobSchema = new mongoose.Schema({

    job_name:{ type:String , required:true},
    rating:{ type:Number , required:true},
    city:{type:String , required:true},
    location:{type:String , require:true},
    skill:{type:String , require:true},
    notice_period:{type:String , require:true}
},
{
    versionKey:false,
    timestamps:true
})
 
const Job = mongoose.model("job" , jobSchema);

const companySchema = new mongoose.Schema({

    company_name:{ type:String , required:true},
    email:{ type:String , required:true},
    no_of_jobs:{ type:Number , required:true },
    job_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"job",
        required:true
    }]
 
},
{
    versionKey:false,
    timestamps:true
})
 
const Company = mongoose.model("company" , companySchema);


//crud jobs

app.post("/jobs" , async (req,res) => {

    try{
    const job = await Job.create(req.body);
    return res.status(200).send({job});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

app.get("/jobs" , async (req,res) => {

    try{
    const jobs = await Job.find().lean().exec();
    return res.status(200).send({jobs});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})


//crud company

app.post("/companies" , async (req,res) => {

    try{
    const company = await Company.create(req.body);
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})



app.get("/companies" , async (req,res) => {

    try{
        const company = await Company.find().lean().exec();
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

app.listen(4444, async () =>{
    await connect();
    console.log("listening 4444 port")
})