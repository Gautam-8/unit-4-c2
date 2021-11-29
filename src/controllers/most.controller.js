const express = require("express");

const router = express.Router();

const Company = require("../models/company.model");

router.get("" , async (req,res) => {

    try{
        const company = await Company.find({}).populate("job_ids").sort({no_of_jobs:-1}).limit(1).lean().exec();
        
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

module.exports = router;