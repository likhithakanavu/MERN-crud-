const mongoose = require('mongoose');
const { Schema } = mongoose;
const StudentSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:false
  },
  date:{
    type:Date,
    default:Date.now()   
  }  
})
module.exports=mongoose.model("student",StudentSchema)