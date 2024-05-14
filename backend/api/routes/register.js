import express from "express"
import User from "../modules/user.js"
import bcrypt from "bcrypt"

const router = express.Router()
router.post("/register", async(req, res) =>{
    try{
        const {name, email, password} = req.body
        console.log("stop 1")
        const hashPassword = await bcrypt.hash(password, 10)
        console.log("stop 2")
        const user = new User({
            name,
            email,
            password: hashPassword
        })
        console.log("stop 3")
        await user.save()
        console.log(user)
        res.status(201).json({message:"user registered succesfully"})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({error:"internal service error"})
    }
    
})
export default router