const mongoose=require('mongoose');
const express=require('express');
const dotenv=require('dotenv');
const app=express();
const cors=require('cors');
const userRouter=require('./routes/user-routes');
dotenv.config();

app.use(express.json());
app.use(cors());

const url=process.env.url;
const port=process.env.port;

try{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

    console.log("database connected successfully");
}
catch(error){
    console.log(error);
}

app.use('/user',userRouter);

app.listen(port,()=>{
    console.log("server is running on port "+port);
})

