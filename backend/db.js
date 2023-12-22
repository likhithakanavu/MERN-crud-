const mongoose = require('mongoose');
// const mongoURL = "mongodb://localhost:27017/crud";
const mongoURL = "mongodb://127.0.0.1/crud";

const connectToMongo = async() =>{
    try{

        await mongoose.connect(mongoURL)
        console.log("connect to mongo Successfull");
    }
    catch(err){
        console.log("connect To mongo Unsuccesfull",err);
    }
}
module.exports=connectToMongo;




