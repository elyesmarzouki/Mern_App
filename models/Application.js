const mongoose = require('mongoose')
const { Schema, model } = mongoose

const applicationSchema = new Schema({
    userId:{
        type: String
    },
    name:{
        type: String,
        required: true
    },
    qualifications:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    post:{
        type: String,
        required: true
    },
    skills:{
        type: String
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

module.exports= Application= model("application", applicationSchema)