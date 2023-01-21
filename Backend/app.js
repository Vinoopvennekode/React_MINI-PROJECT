const express=require( 'express')
const dotenv=require('dotenv')
const connectDB =require('./config/connectDB')
var bodyParser =require('body-parser')


dotenv.config()
const app=express()
// app.use(bodyParser.json({limit:'50mb'}));
app.use(express.json())

connectDB()


const userRouter=require('./routes/user')
const adminRouter=require('./routes/admin')




app.use('/admin',adminRouter)


app.listen(process.env.PORT,console.log(`server connected in ${process.env.PORT}`))