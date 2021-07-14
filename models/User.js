const mongoose = require('mongoose')
const { Schema , model} = mongoose

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    country:{
        type: String,
    },
    dateofbirth:{
        type: Date,
    },
})

module.exports= User= model("user", userSchema)