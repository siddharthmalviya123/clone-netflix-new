import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'https://clone-netflix-new.vercel.app',
    credentials:true
}
app.use(cors());

// api
app.use("/api/v1/user", userRoute);
// lh:8000/api/v1/user/register

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
