const mongoose=require ('mongoose')

const Schema=mongoose.Schema


const userSchema=Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    }

})

module.exports=mongoose.model('user',userSchema)