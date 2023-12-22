const studentSchema = require('../model/studentSchema');
const StudentSchema = require('../model/studentSchema');
const Insert = async(req,res)=>{
    try{
        const { name, phone, email, address } = req.body

        let checkphone = await StudentSchema.findOne({phone});
        if(checkphone){
            console.log("Phone number already exists! try with another number");
            return res.status(400).json({errors:"Phone number already exists!"});
        } else {

 
        const data = await new studentSchema({name,email,phone,address});
        const savedStudent =  data.save();
        console.log("Insertion Successfull")
        res.send({"Insertion Success":true,savedStudent});
        }
    }
    catch(error){
        console.error("Some error Occured"+error);
        res.status(500).json("Some internal error!!!")
    }
}

const View = async(req,res)=>{ 
    try{
        const user = await StudentSchema.find();
        console.log(user)
        res.json(user)
    }
    catch(error){
        console.error("Some error Occured"+error);
        res.status(500).json("Some internal error!!!")
    }
}




const Delete = async (req,res)=>{
    try{
        let data = await StudentSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exists with this ID!")
        } else {
            data = await StudentSchema.findByIdAndDelete(req.params.id);
            console.log("Data deleted successfully...");
            res.json({"Success":true, "Deleted Data":data})
        }
    } 
    catch(error){
        console.error("Some error Occured"+error);
        res.status(500).json("Some internal error!!!")
    }
}



const SingleView = async (req,res)=>{
    try{
        let data = await StudentSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exists with this ID!")
        }else {
            res.json(data)
        }
    }
    catch(err){
        console.error("Some error Occured"+err); 
        res.status(500).json("Some internal error!!!")
    }
}


const Update = async (req, res)=>{
    // name:"ravi",
    // email:"email@gmail.com",
    // phone:9876543210,
    // address:"Address"
    const { name, email, phone, address } = req.body
    //name:"Ravi kumar"
    try{    
        const newData={}
        if(name){newData.name=name}
        if(email){newData.email=email}
        if(phone){newData.phone=phone}
        if(address){newData.address=address}
        let data = await StudentSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exists with this ID!")
        }else{
            data = await StudentSchema.findByIdAndUpdate(req.params.id,{$set:newData});
            res.json({data});
        }
    }
    catch(err){
        console.error("Some error Occured"+err);
        res.status(500).json("Some internal error!!!")
    }
}
module.exports= { Insert,View, Delete,SingleView,Update };