const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    // name:{type:String,required:true},
    // description:{type:String,required:true}
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true}
    

});

module.exports=mongoose.model("Product",productSchema);