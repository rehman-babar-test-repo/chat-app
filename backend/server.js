import path  from "path";
import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors'

// import ROUTES
import authRoute from "./route/auth.route.js";
import messageRoute from "./route/message.route.js";
import userRoute from "./route/user.route.js";

// import dataBase Connection
import connectToDataBase from "./db/connectToDataBase.js";

// const app = express();
import {app, server} from "./socket.io/socket.js";
const PORT =process.env.PORT || 5000;
app.use(cors())
const __dirname = path.resolve()

// CONFIGURATION
dotenv.config();



// MIDDELWERES  
app.use(express.json());
app.use(cookieParser())

// ROUTES
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frentend/dist")))

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "frentend", "dist", "index.html"))
})


server.listen(PORT, ()=>{
connectToDataBase()
console.log(`server is running on PORT ${PORT}`)})