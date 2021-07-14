const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


exports.Signup= async(req,res)=>{
    try {
        const {email,password,phone}= req.body;

        const findUserByEmail = await User.findOne({email});
        if(findUserByEmail){
            return res.status(400).send({errors: [{msg : "Email already exists."}]})
        }

        const findUserByPhone = await User.findOne({phone});
        if(findUserByPhone){
            return res.status(400).send({errors: [{msg : "Phone already exists."}]})
        }

        const newUser = new User({...req.body});

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedPassword;

        await newUser.save();

        const token = jwt.sign( { id : newUser._id }, process.env.SECRET_KEY );

        res.status(200).send({msg:"Sign up successfully", user : newUser, token})
    } catch (error) {
        console.log(error);
        res.status(500).send({errors: [{ msg: "The user can't be saved." }] })
    }
}

exports.Login= async(req,res)=>{
    try {
        const {email, password}= req.body

        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(400).send({errors: [{ msg: "We couldn't find an account matching the login info you entered."}] })
        }

        const comparePassword = await bcrypt.compare(password,findUser.password)
        if(!comparePassword){
            return res.status(400).send({errors: [{ msg: "We couldn't find an account matching the login info you entered."}] })
        }

        const token = jwt.sign( { id : findUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" } );

        res.status(200).send({msg:"Log in successfully", user:findUser, token})

    } catch (error) {
        res.status(500).send({msg: [{ msg: "You can't login."}]})
    }
}

exports.Removeuser= async(req,res)=>{
    try {
        const {Id}=req.params
        await User.findByIdAndDelete({_id:Id})
        res.status(200).send("User deleted")
    } catch (error) {
        res.status(500).send("The operation is impossible!")
    }
}
