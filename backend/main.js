import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import crypto from "crypto"
import session from "express-session"
import runDB from "./db.js"

import registerRoute from "./api/routes/register.js"

const app = express()
const port = 3000
const sessionSecret = crypto.randomBytes(64).toString("hex")

runDB()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(bodyParser.json())

// app.use(session({
//     session:sessionSecret,
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         maxAge:24*60*60*1000
//     }
// }))

app.use("/api", registerRoute)

app.listen(port, ()=>{
    console.log("listening on port", port)
})