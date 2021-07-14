const Application = require('../models/Application')

exports.Postapplication=async(req,res)=>{
    try {
        const newApplication = new Application({...req.body});
        await newApplication.save();
        res.status(200).send({msg:"Application added", application : newApplication})
    } catch (error) {
        res.status(500).send("You can't add an application")
    }
}

exports.Getallapplications=async(req,res)=>{
    try {
        const allapplications = await Application.find();
        res.status(200).send({msg:"all applications", applications: allapplications})
    } catch (error) {
        res.status(500).send("We can't show you applications")
    }
}

exports.Removeapplication= async(req,res)=>{
    try {
        const {Id}=req.params
        await Application.findByIdAndDelete({_id:Id})
        res.status(200).send("Application deleted")
    } catch (error) {
        res.status(500).send("The operation is impossible!")
    }
}

exports.Editapplication= async(req,res)=>{
    try {
        const {Id}=req.params
        const editedApplication =await Application.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        await editedApplication.save();
        res.status(200).send({msg:"Application edited", application: editedApplication})
    } catch (error) {
        res.status(500).send("The operation is impossible!")
    }
}