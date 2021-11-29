const express = require("express");

const router = express.Router();

const Company = require("../models/company.model");

router.post("" , async (req,res) => {

    try{
    const company = await Company.create(req.body);
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})



router.get("" , async (req,res) => {

    try{
        const company = await Company.find().lean().populate("job_ids").exec();
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

router.get("/:id" , async (req,res) => {

    try{
        const company = await Company.findById(req.params.id ,{job_ids:0 , no_of_jobs:0}).lean().exec();
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})


router.get("/most" , async (req,res) => {

    try{
        const company = await Company.find().sort({no_of_jobs:-1}).limit(1).lean().exec();
    return res.status(200).send({company});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

module.exports = router;