require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT || 5000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'This is simple server'});
});

app.listen(PORT,(error)=>{
    if(error){
        console.error('something is wrong');
    }else{
        console.info('server is run');
    }
});