import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://siddharthmalviya:netflix@cluster0.u6u4zmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
        console.log("mongo not connected")
    })
};
export default databaseConnection;