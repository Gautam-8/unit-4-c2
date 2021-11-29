const mongoose = require("mongoose");

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
 
module.exports = mongoose.model("company" , companySchema);
