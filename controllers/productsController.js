//const db=require("../models");
//var Product=require("../models/productModel")
const Product=require('../models/productModel.js')
exports.createProduct=async (req,res,next)=>{
    try{const product =await Product.create(req.body)
    res.status(201).json({
        sucess:true,
        product
    });}catch (error){
        next(error);
    }
}
 

exports.getAllProducts=(req,res)=>{res.status(200).json({message:"Route is working fine"})
}
//return getAllProducts()
//module.exports=createProduct