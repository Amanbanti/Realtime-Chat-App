import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"

import authRoutes from "./route/auth.route.js"
import messageRoutes from "./route/message.route.js"



dotenv.config()
const app = express()

const port = process.env.PORT

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.use("/api/message", messageRoutes)


app.listen (5001,()=>{
    console.log("Server is running on PORT:"+ port)
    connectDB()
})