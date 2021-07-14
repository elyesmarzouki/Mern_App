const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        console.log("The database is connected")
    } catch (error) {
        console.log("The database is not connected", error)
    }
}

module.exports = connectDB