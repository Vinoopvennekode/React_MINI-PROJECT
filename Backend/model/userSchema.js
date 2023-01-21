const mongoose=require ('mongoose')

const Schema=mongoose.Schema


const userSchema=Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    Image:{
        type:String
    }

})

module.exports=mongoose.model('user',userSchema)