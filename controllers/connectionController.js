const {User} = require("../models/User")


exports.accepted = async(req,res)=>{

}

exports.interested = async (req,res)=>{
    const userId = req.params.userId
    console.log(userId)
    res.send("OK")
}

exports.ignored = async(req,res)=>{
    
}

exports.rejected = async(req,res)=>{
    
}

