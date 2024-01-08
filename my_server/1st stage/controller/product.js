
const fs = require('fs');
const model = require('../model/product');
// const mongoose = require('mongoose');
const Product = model.Product; 

//exporting the fucntions
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

exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ err: 'An error occurred while fetching the product.' });
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


exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the product.' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json({ message: 'Product deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the product.' });
  }
};
