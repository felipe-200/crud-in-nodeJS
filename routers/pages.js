//modules import 
const express = require("express")
const router = express()
const mongoose = require("mongoose")
require("../models/Users")
const UserModel = mongoose.model("UserModel")
//routers
    //List all users
    router.get("/", (req, res) => {
        UserModel.find().sort({date: "desc"}).lean().then((users) => {
            res.render("pages/users", { users : users })
        }).catch((err) => {
            console.log("ERROR => " + err)
        })
    })
    //router default
    router.get("/addusers", (req, res) => {
        res.render("pages/addusers")
    })
    //add user
    router.post("/addusers/cad", (req, res) => {
        //Step values for object
        const NewUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            cpf: req.body.cpf,
            age: req.body.age
        }
        new UserModel(NewUser).save().then(() => {
            res.send("Cadastrado com sucesso")
            res.redirect("/")
        }).catch((err) => {
            console.log(err)
            res.redirect("/")
        })
    })
    //edit user
    router.get("/edit/:id", (req, res) => {
        let id = req.params.id
        UserModel.findOne({_id: id}).lean().then((users) => {
            res.render("pages/editusers", {users : users})
        })
        
    })
    //Make edit
    router.post("/edit", (req, res) => {
        let id = req.body.id
        UserModel.findById(id, (err, users) => {
            if(err) {
                console.log(err)
            }
            users.firstName = req.body.firstName
            users.lastName = req.body.lastName
            users.cpf = req.body.cpf
            users.age = req.body.age
            
            users.save()

        })
        res.send("Usuario editado com sucesso")
        
    })
    //delete user
    router.get("/delete/:id", (req, res) => {
        let id = req.params.id
        UserModel.deleteOne({_id : id}).then(() => {
            res.send("Excluido com sucesso")
        }).catch((err) => {
            console.log("ERROR => " + err)
            res.redirect("/")
        })
    })
//export routers
module.exports = router