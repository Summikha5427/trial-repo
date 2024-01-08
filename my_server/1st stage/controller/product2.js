//succesfully adding the product through pstMan body


const fs = require('fs');
const model = require('../model/product');
const Product = model.Product; 

//exporting the fucntions
exports.checkAPI = (req,res)=>{
  res.json(`I love you mere Aka 'SAllal lahu alaihi wasalam'`)
};

exports.addProducts = async(req,res)=>{
  try{
    const product = new Product(req.body);
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
