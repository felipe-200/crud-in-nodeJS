const mongoose = require("mongoose")
const Schema = mongoose.Schema

//New Tables
const UserModelSchema = new mongoose.Schema({
    firstName : {
        type: String,
        require: true
    },
    lastName : {
        type: String,
        require: true
    },
    cpf : {
        type: Number,
        require: true
    },
    age : {
        type: Number,
        require: true
    },
    date : {
        type: Date,
        default: Date.now()
    }
})
mongoose.model("UserModel", UserModelSchema)