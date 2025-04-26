const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.protect = async (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"No authorized token"})
    }
    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (err) {
        res.status(401).json({ message: "Token failed or expired" });
    }
}