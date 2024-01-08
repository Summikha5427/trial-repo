
const fs = require('fs');
const model = require('../model/product').Product;
const mongoose = require('mongoose');
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

//get-All Products
exports.getAllProducts = async(req,res,next)=>{
 const products =await Product.find();
  res.json(products);
};

//get-OneProduct:----error

exports.getProducts = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
};

//-------------------------

exports.replaceProduct = async (req,res)  => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
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
