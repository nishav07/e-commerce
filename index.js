let express = require('express');
let app = express();
let port = 3000;
const fs = require('fs');
const path = require('path')
express.urlencoded({ extended: true }) ;
app.set("views", path.join(__dirname, "views"));
app.set("view engine" , "ejs");

app.listen(port, () => {
    console.log("app listen by express");
})


app.get("/shop/:product" , (req,res) => {
    let product = req.params.product;
    let db = require('./db.json');
    console.log(db);
    let data = db[product];
    console.log(data);
    res.render("product" ,  {data : data}) ;
})

app.get("/shop" , (req,res) => {
    res.render("shop");
    console.log(req.params);
})

app.get("/admin" , (req,res) => {
    res.render("admin.ejs")
})

app.get("/admin/add" , (req,res) => {
    res.render("add.ejs");
})

app.use((req,res) => {
    res.status(404).render("err")
})
