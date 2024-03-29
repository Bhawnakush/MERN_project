const mongoose=require("mongoose");
const productSchema=new  mongoose.Schema({
name:{
    type:String,
    required:[true,"please enter the product name"]

},
description:{
    type:String,
    required:[true,"pelase enter the product description"]}
,
price:{
    type:Number,
    required:[true,"please enter the product price"],
    maxLength:[8,"price cannot exceed 8 characters"]
},
rating:{
    type:Number,
    default:0
},
images:{
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }

},
category:{
    type:String,
    required:[true,"please enter product category"],

},
stock:{
    type:Number,
    requried:[true,"please enter product stock"],
    maxLength:[4,"stock connont exceed 4 character"],
    default:1
},
numOfReviews:{
    type:Number,
    default:0
},
reviews:[
    {
        name:{
            type:String,
            required:true,
            default:""
        },
        rating:{
            type:Number,
            required:true,
            default:1

        },
        comment:{
            type:String,
            required:true,
            default:""

        }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}

})

module.exports=productSchema;