import dotenv from "dotenv";
import connectDB from "./Database/index.js";
import {app} from "./app.js";
dotenv.config({
    path: ".env"
});

connectDB().then(
    ()=>{
        app.on("error",(error)=>{
            console.log("ERRR index/src : ",error);
            throw error;
        })
        app.listen(process.env.PORT || 5000 ,()=>{
        console.log("Server is listening on port : " + process.env.PORT)
    });
        
    }
).catch((err)=>{
    console.log("Server Connection Failed ", err)
});