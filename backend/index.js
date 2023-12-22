const express = require('express')
const {Hello,Hello1} = require('./demo');
const connectToMongo = require('./db');
const cors = require('cors')
connectToMongo()
const app =express();
app.use(express.json())
app.use(cors())
app.use('/api/student',require('./router/studentRoute'))


const MySchema = require('./model/crud');
app.get('/first ',(req,res)=>{
    console.log("-------------------------------");
    console.log("Your first API has been called");
    res.send("This is my First API call");
})

{/* <input type="text" name="name1"/>
<input type="text" name="phone"/>
<input type="text" name="address"/> */}









app.post('/api/insert',async(req,res)=>{
    try{
        const { name, email, phone, address } = req.body 
        const data = await new MySchema({name:name,email:email,phone:phone,Address:address});
        const savedData = await data.save();
        console.log("Insertion Successfull")
        res.send({"Insertion Success":true,savedData});
    }
    catch(error){
        console.error("Some error Occured"+error);
        res.status(500).json("Some internal error!!!")
    }
})






// Sample book data
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// Endpoint to get all books
app.get('/books', (req, res) => {
  res.send(books);
});



app.get('/add', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 + num2;
    res.json({ result });
  });

port=7000;
Hello(1,3)
Hello1()
app.listen(port,()=>{
    console.log("------------------------------------");
    console.log("App is listening on port number "+port);
    // console.log(`App is listening on port number ${port}`);
})

