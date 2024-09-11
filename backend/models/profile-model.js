const mongoose=require('mongoose');

const profileSchema=new mongoose.Schema({
    loginId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    pronoun:{
        type:String,
        require:true
    },
    college:{
        type:String,
        require:true
    },
    linkdin:{
        type:String,
        require:true
    },
    skills:{
        type:String,
        require:true
    },
    bio:{
        type:String,
        require:true
    }

})

const Profile=mongoose.model("Profile",profileSchema);

module.exports=Profile;