import mongoose from "mongoose"
import { taskSchema } from "./task.js"

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    tasks:[
        taskSchema
    ]
})

const userModule = mongoose.model("User", userSchema) 

export default userModule