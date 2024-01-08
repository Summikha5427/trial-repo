
const express = require('express'); 
const productController = require('../controller/product');
const router = express.Router();



//ModelViewCntrolller
router
     
      .post('/add',productController.addProducts)
      .get('/',productController.getAllProducts)
      .get('/one:id',productController.getProduct)
      .put('/:id',productController.replaceProduct)
      .patch('/:id',productController.updateProduct)
      .delete('/:id',productController.deleteProduct);

exports.routes = router;