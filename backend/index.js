const mongoose=require('mongoose');
const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser = require('cookie-parser');
const userRouter=require('./routes/user-routes');
const profileRouter=require('./routes/profile-routes');
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const url=process.env.url||"mongodb://localhost:27017/CodeEdu";
const port=process.env.port||5000;

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

app.use('/api/user',userRouter);
app.use('/api/profile',profileRouter);

app.listen(port,()=>{
    console.log("server is running on port "+port);
})

