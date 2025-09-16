const User=require('../models/userSchema');

exports.newUser=async(req,res)=>{
    try{
        const{
            username,
            email,
            password,
            role,
            profile
        }=req.body;
        
        const newUser=new User({
            username,
            email,
            password,
            role,
            profile
        });

        await newUser.save();
        res.json({message:"user added Sucessfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}