import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"

import authRoutes from "./route/auth.route.js"
import messageRoutes from "./route/message.route.js"



dotenv.config()
const app = express()

const port = process.env.PORT

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use("/api/auth", authRoutes)

app.use("/api/message", messageRoutes)


app.listen (5001,()=>{
    console.log("Server is running on PORT:"+ port)
    connectDB()
})