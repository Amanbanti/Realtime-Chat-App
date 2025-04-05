import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"

import authRoutes from "./route/auth.route.js"


dotenv.config()
const app = express()

const port = process.env.PORT

app.use(express.json());

app.use("/api/auth", authRoutes)

app.listen (5001,()=>{
    console.log("Server is running on PORT:"+ port)
    connectDB()
})