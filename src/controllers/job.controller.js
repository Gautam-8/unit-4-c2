const express = require("express");

const router = express.Router();

const Job = require("../models/job.model")


router.post("" , async (req,res) => {

    try{
    const job = await Job.create(req.body);
    return res.status(200).send({job});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

router.get("" , async (req,res) => {

    try{
    const jobs = await Job.find().lean().exec();
    return res.status(200).send({jobs});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})



router.get("/:citi/:skil" , async (req,res) => {

    try{
    const jobs = await Job.find( { city:req.params.citi, skill:req.params.skil}).lean().exec();
    return res.status(200).send({jobs});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})


router.get("/home" , async (req,res) => {

    try{
    const jobs = await Job.find( { location:"work from home"}).lean().exec();
    return res.status(200).send({jobs});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

router.get("/notice" , async (req,res) => {

    try{
    const jobs = await Job.find( { notice_period:"2months"}).lean().exec();
    return res.status(200).send({jobs});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

router.get("/ratings" , async (req,res) => {

    try{
    const jobs = await Job.find().sort({rating:-1}).lean().exec();
    return res.status(200).send({jobs});

    }catch(e){
        return res.status(500).send( {message: e.message})
    }
})

module.exports = router;