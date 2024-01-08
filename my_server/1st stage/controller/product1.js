//product was succesfully added using mongo atls


const fs = require('fs');
const model = require('../model/product');
const Product = model.Product; //export inside the model 

//exporting the fucntions
exports.checkAPI = (req,res)=>{
  res.json(`I love you mere Aka 'SAllal lahu alaihi wasalam'`)
};

exports.addProducts = async(req,res)=>{
  try{
      const product = new Product(); //creates new product data but empty
      product.title = 'iPhoneX';
      product.price = 9999;
      product.rating = 5; // nothing will be saved in the data base untill we save it. 
        // one of the operation to save date in the data base :
        //1* is to add the await function 
        //2* is to have the call back function, we are using call back function
       // Save the product using await to wait for the Promise to resolve
    const savedProduct = await product.save();
    console.log({savedProduct});
    res.json({type:'POST'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'An error occured while adding the product.'}) 
   };
};

exports.getProduct = (req,res,next)=>{
  res.json(products);
};

exports.getAllProducts = (req,res)=>{
  const id = +req.params.id;  
  const dekho =products.find(p => p.id === id)
  res.json(dekho);
};

exports.updateProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  products.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json({type:'put'});
};

exports.patchProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1,{...product,...req.body})
  res.status(201).json({type:'patch'});
};

exports.deleteProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1)
  res.status(201).json({type:'deleted'});
};
