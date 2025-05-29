let express = require('express');
let app = express();
let port = 3000;
const fs = require('fs');
express.urlencoded({ extended: true }) ;

app.listen(port, () => {
    console.log("app listen by express");
})

app.set("view engine" , "ejs");

app.get("/shop/:product" , (req,res) => {
    let product = req.params.product;
    let db = require('./db.json');
    console.log(db);
    let data = db[product];
    console.log(data);
    res.render("product" ,  {data : data});
})

app.get("/shop" , (req,res) => {
    res.render("home");
    console.log(req.params);
})



