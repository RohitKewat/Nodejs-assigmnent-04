const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


app.get("/", (req, res) => {

    res.send("Hello world!");

});

// add api 
app.post("/add", (req, res) => {
    //  console.log(req.body);
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    //validations 1

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: "errors",
            message: "Invalid data types"
        })
    }

    // validation 2


    if (num1 < -10000000 || num2 < -10000000 || num1 + num2 < -1000000) {
        return res.status(400).json({

            status: "error",
            message: "Underflow"
        })
    }
    // validation 3
    if (num1 > 10000000 || num2 > 10000000 || num1 + num2 > 1000000) {
        return res.status(400).json({

            status: "error",
            message: "Overflow"
        })
    }

    //if all good 

    res.status(200).json({
        status: "succes",
        message: "the sum of given two numbers",
        sum: num1 + num2
    })
});

// sub api /sub

app.post("/sub", (req, res) => {

    const num1 = req.body.num1;
    const num2 = req.body.num2;
    
    // validation
    if(isNaN(num1)|| isNaN(num2) ){
        return res.status(400).json({
            status: "error",
            message : "Invalid data types "
        })
    }
    // validation
    if(num1 < -1000000|| num2 < -1000000 || num1 - num2 < -1000000){
        return res.status(400).json({
            status: "error",
            message : "Underflow"
        })
    }
       // validation
       if(num1 > 1000000|| num2 > 1000000){
        return res.status(400).json({
            status: "error",
            message : "Overflow"
        })
    }
    // all good 
    res.status(200).json({
        status: "succes",
        message: "the difference of given two numbers",
        difference: num1 - num2
    })
})

// multiply api 
 app.post("/multiply",(req,res)=>{

    const num1 = req.body.num1;
    const num2 = req.body.num2;
 
    
    // validation
    if(isNaN(num1)|| isNaN(num2) ){
        return res.status(400).json({
            status: "error",
            message : "Invalid data types "
        })
    }
    // validation
    if(num1 < -1000000|| num2 < -1000000 || num1 * num2 < -1000000){
        return res.status(400).json({
            status: "error",
            message : "Underflow"
        })
    }
       // validation
       if(num1 > 1000000|| num2 > 1000000 || num1 * num2 > 1000000){
        return res.status(400).json({
            status: "error",
            message : "Overflow"
        })
    }
    // all good 
    res.status(200).json({
        status: "succes",
        message: "The product of given numbers",
        result: num1 * num2 
    })


 })
 app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

     // validation
     if(num2==0){
        return res.status(400).json({
            status : "error",
            message :"Cannot divide by zero"

        })
    }
       // validation
    if(isNaN(num1)|| isNaN(num2) ){
        return res.status(400).json({
            status: "error",
            message : "Invalid data types "
        })
    }
    // validation
    if(num1 < -1000000|| num2 < -1000000 || num1 / num2 < -1000000){
        return res.status(400).json({
            status: "error",
            message : "Underflow"
        })
    }
       // validation
       if(num1 > 1000000|| num2 > 1000000 || num1 / num2 > 1000000){
        return res.status(400).json({
            status: "error",
            message : "Overflow"
        })
    }
    // all good 
    res.status(200).json({
        status: "succes",
        message: "The division of given numbers",
        result: num1 / num2 
    })
 })
//   listen ---------------------------------------------------------------------------------------
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;