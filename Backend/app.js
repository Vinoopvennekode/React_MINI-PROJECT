const express=require( 'express')
const dotenv=require('dotenv')
const connectDB =require('./config/connectDB')

dotenv.config()
const app=express()
connectDB()
const userRouter=require('./routes/user')
const adminRouter=require('./routes/admin')




app.use('/admin',adminRouter)


app.listen(process.env.PORT,console.log(`server connected in ${process.env.PORT}`))