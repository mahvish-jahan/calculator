// jshint esverson : 6
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req, res){
    res.send('thanks for posting...');
});
app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/BMICalculator.html");
});
app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height*height);
  res.send("your bmi is" + bmi);
});
app.listen(3000,function(){
    console.log("server is running.....");
});