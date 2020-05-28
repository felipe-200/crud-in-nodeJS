//modules import
   const express = require("express")
   const app = express()
   const handlebars = require("express-handlebars")
   const path = require("path")
   const router = require("./routers/pages")
   const bodyparser = require("body-parser")
   const mongoose = require("mongoose")
//config
   app.use(express.static(path.join(__dirname, "public")))
 //handlebars
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
    app.set("view engine", "handlebars")
 //body parsers
    app.use(bodyparser.urlencoded({extended: true}))
    app.use(bodyparser.json())
 //mongoose
   const URL = "mongodb://localhost/crud"
   mongoose.Promise = global.Promise
   mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }).then(() => {
      console.log("MONGO CONNECTED")
   }).catch((err) => {
      console.log("ERROR => ", err)
   })

//Routers
    app.use("/", router)
//On server
   app.listen(3000, () => {
      console.log("SERVER ON")
   })