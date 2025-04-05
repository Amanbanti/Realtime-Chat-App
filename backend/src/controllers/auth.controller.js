import express from "express"

export const singup = (req,res)=>{
    const {fullName,eamil,password}=req.body
    try{
        

    }catch(error){

    }
}


export const login = (req,res)=>{
    res.send("Login Route")
}

export const logout = (req,res)=>{
    res.send("Logout Route")
}