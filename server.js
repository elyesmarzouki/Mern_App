console.clear()
const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()
require("dotenv").config()
const PORT = process.env.P_PORT

connectDB();
app.use(express.json());
app.use("/api/user",require("./router/user"));
app.use("/api/offer",require("./router/offer"));
app.use("/api/application",require("./router/application"));


const server= app.listen(PORT,(error)=>{
    if(error){
        console.error(error)
    }
    else{
        console.log(`The server is running on port ${PORT}`)
    }
})

server.timeout = 0;