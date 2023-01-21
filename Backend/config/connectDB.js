const mongoose=require('mongoose')

const connectDB=async()=>{
        const db=mongoose.connect(process.env.MONGODB_CONNECT_online).then(()=>{
        console.log(`mongdb connected`)})
        
    .catch ((error)=> {
        console.log(error.message);
        process.exit()
        
    })
  
}
module.exports=connectDB