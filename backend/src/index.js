import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"

import authRoutes from "./route/auth.route.js"
import messageRoutes from "./route/message.route.js"

import {app, server} from './lib/socket.js'

import path from "path"


dotenv.config()

const port = process.env.PORT

const __dirname = path.resolve()

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use("/api/auth", authRoutes)

app.use("/api/messages", messageRoutes)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    }   )   
}


server.listen (5001,()=>{
    console.log("Server is running on PORT:"+ port)
    connectDB()
})