require('dotenv').config() 
const express = require('express');
const mongoose = require('mongoose');
const server = express();
// const productRouter = express.Router();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
console.log('env',process.env.DB_PASSWORD);


const uri = `mongodb+srv://sumiakhan:${process.env.DB_PASSWORD}@cluster0.sgoi2sj.mongodb.net/ecommerce-DataBase?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));


//bodyParser(MiddleWare)
server.use(express.json());
//to access the path we have to have this middleware router in our custom path
server.use('/products',productRouter.routes); //routes(declared variable in the product.js)
server.use('/users',userRouter.routes);

// ---Adding the port number for the application:
server.listen(process.env.PORT,()=>{
 console.log("server Started");
});


