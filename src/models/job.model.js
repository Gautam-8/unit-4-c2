
const mongoose = require("mongoose");

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
 
module.exports = mongoose.model("job" , jobSchema);