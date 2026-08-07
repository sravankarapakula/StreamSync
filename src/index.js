
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
//Added "--env-file=.env" in package.json near nodemon to resolve the error of .env not loading before other imports leading to errors like cloudinary error of waiting for url,etc.

import connectDB from "./db/index.js"
import {app} from "./app.js"



const port = process.env.PORT || 8000

connectDB()
.then(()=>{
    app.on("error",(e)=>{
        console.log("ERROR: ",e);
        throw error;
    })

    app.listen(port, ()=>{
        console.log(`Server running on port: ${port}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!!",err);
    
})











 

/* 
    Connecting database with backend in the index file:

import express from "express"
const app = express();
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("ERROR : ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port: ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR : ",error);
        throw err
    }
})()
*/