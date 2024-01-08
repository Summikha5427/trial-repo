const mongoose = require('mongoose');
const {Schema} = mongoose;
  
  //Schema(Configuration):

  const productSchema = new Schema({
    // _id : {type: String},
    title:
      {
        type:String,
        required:true,
        unique: true
      },
    description:String,
    price:{
      type:Number, 
      min:[0,'wrong price'],
      required:true
      },
    discountPercentage:
    {
      type:Number, 
      min:[0,'wrong minimum discount'],
      max:[50,'wrong maximum discount']
    },
    rating:
      {
        type:Number,
       min:[0,'wrong minimum rating'],
       max:[5,'wrong maximum rating']
      },
    brand: {
      type:String,
      required:true
    },
    category: 
      {
        type:String,
        required:true
      },
    thumbnail:
      {
        type:String,
        required:true
      },
    images: [ String ]
});

exports.Product = mongoose.model('Product',productSchema);

// using the Schema Model we can Perofrm 4 CURD Operations.