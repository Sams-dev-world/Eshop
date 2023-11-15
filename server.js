const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require("morgan");
const mongoose = require("mongoose");


require("dotenv/config");
const api = process.env.API_URL;
const productRouter = require('./router/product');


//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));


//Routers
app.use(`${api}/products`, productRouter)


//mongodb connection
mongoose.connect(process.env.CONN_STRING)
.then(()=> {
    console.log('Database connection successful!')
})
.catch((err)=> {
    console.log(err);  
})


//server..
app.listen(3000, ()=> {
    console.log("The server is starting now with http://localhost:3000");
})