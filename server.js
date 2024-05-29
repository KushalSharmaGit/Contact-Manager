const express = require("express");
const connectDb = require('./Config/dbConnection');
const errorHandler = require("./Middelware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();

const app = express();

const port =process.env.PORT || 5000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/api/contacts" , require('./Routes/ContactRoutes'));
app.use("/api/user" , require('./Routes/userRoutes'));
app.use(errorHandler);



app.listen(port , ()=>{
    console.log(`The server is running on port : ${port}`);
})