const mongoose = require('mongoose')
const { Schema, model} = mongoose

const offerSchema = new Schema({
    userId:{
        type: String
    },
    company:{
        type: String,
        required: true
    },
    post:{
        type: String,
        required:true
    },
    minwage:{
        type: Number,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    requirements:{
        type: String,
        required: true
    },
    submissiondeadline:{
        type: Date,
        required: true
    },
    dateofpublication:{
        type: Date,
        required: true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports= Offer= model("offer", offerSchema)