const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    profile:{
        fullname:{type:string},
        bio:{type:String},
        avatar:{type:String},
        socialLinks: {
            facebook: { type: String },
            twitter: { type: String },
            linkedin: { type: String }
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
    }
});

module.exports=mongoose.model("User",userSchema);