const mongoose=require('mongoose');

const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.info('databse connect');
    }catch(err){
        console.error('database not connect');
        process.exit(1);
    }
}

module.exports=connectDb;   