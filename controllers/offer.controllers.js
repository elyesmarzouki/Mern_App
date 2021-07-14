const Offer = require('../models/Offer')

exports.Postoffer=async(req,res)=>{
    try {
        const newOffer = new Offer({...req.body});
        await newOffer.save();
        res.status(200).send({msg:"Offer added", offer : newOffer})
    } catch (error) {
        res.status(500).send("You can't add an offer")
    }
}

exports.Getalloffers=async(req,res)=>{
    try {
        const alloffers = await Offer.find();
        res.status(200).send({msg:"all offers", offers: alloffers})
    } catch (error) {
        res.status(500).send("We can't show you offers")
    }
}

exports.Removeoffer= async(req,res)=>{
    try {
        const {Id}=req.params
        await Offer.findByIdAndDelete({_id:Id})
        res.status(200).send("Offer deleted")
    } catch (error) {
        res.status(500).send("The operation is impossible!")
    }
}

exports.Editoffer= async(req,res)=>{
    try {
        const {Id}=req.params
        const editedOffer =await Offer.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        await editedOffer.save();
        res.status(200).send({msg:"Offer edited", offer: editedOffer})
    } catch (error) {
        res.status(500).send("The operation is impossible!")
    }
}