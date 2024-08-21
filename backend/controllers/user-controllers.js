const User= require("../models/user-model");


exports.signUp=async(req,res)=>{
    
    try{
        const {name,email,password}=req.body;
        const userExist=await User.findOne({email});

        if(userExist)
        {
            return res.status(400).json({
                message:"User Already Exists"
            ,
            user:{
                id:userExist._id,
                name:userExist.name,
                email:userExist.email,
                password:userExist.password
            }
            })
        }

        const userCreated=await User.create(
            {
                name:name,
                email:email,
                password:password
            }
        )

        res.status(200).json({
            message:"User Created Successfully",
            user:{
                id:userCreated._id,
                name:userCreated.name,
                email:userCreated.email,
                password:userCreated.password
            }
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }

}

exports.logIn=async (req,res)=>{

    try{
        const {email,password}=req.body;
        const userExisted=await User.findOne({email});
        if(!userExisted)
        {
            return res.status(400).json({
                message:"User Does Not Exist"
            })
        }

        res.status(200).json({
            message:"User Logged In Successfully",
            user:{
                id:userExisted._id,
                name:userExisted.name,
                email:userExisted.email,
                password:userExisted.password
            }
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}