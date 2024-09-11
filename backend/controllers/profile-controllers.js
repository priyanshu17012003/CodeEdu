const Profile=require('../models/profile-model');
const User=require('../models/user-model');

exports.createProfile=async(req,res)=>{

    try{
        const {name,email,college,linkdin,skills,bio}=req.body;
        const userExists=await User.findOne({email});

        if(!userExists){
            return res.status(200).json({
                message:"First SignUp Us!"
            })
        }

        const user=await Profile.create({
            loginId:userExists._id,
            name:name,
            email:email,
            college:college,
            linkdin:linkdin,
            skills:skills,
            bio:bio,
        })

        res.status(200).json({
            message:"Profile created Succesfully",
            user
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server error"});
    }
}

exports.getProfile=async(req,res)=>{

    try{
    const userId=req.params.id;

    const user=await Profile.findOne({loginId:userId});
    
    res.status(200).json(
        {
            message:"profile fetched successfully",
            user
        }
    )
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(
            {
                message:"Internal server error"
            }
        )
        
    }
    
}