const express=require("express");
const app=express();
app.use(express.json())
//route imports
//mount the router : to use the router in your main exress app,you can mount it at  a specific url prefix
const product=require("./routes/productRoute");
app.use("/api/v1",product)
module.exports=app;