const express=require("express");
const {createProduct,getAllProducts}=require("../controllers/productsController")
//use the express.Router class to create modular ,amuntable route handlers.a raouter instance is a complete middlewware and rounting system for this reason it is often referred to ad a mnini-app
const router=express.Router();
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct)
module.exports=router;