import mongoose from "mongoose"

export const taskSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,

    },
    status: {
        type:String,
        required:true
    }
})

const taskModule = mongoose.model("Task", taskSchema) 

export default taskModule