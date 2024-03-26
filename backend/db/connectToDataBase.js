import mongoose from "mongoose";
import express from 'express'

const connectToDataBase= async ()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO_URI)
        console.log('mongo_db connected');
    } catch(err){
        console.log('mongo_db connection err', err);
    }
}
export default connectToDataBase