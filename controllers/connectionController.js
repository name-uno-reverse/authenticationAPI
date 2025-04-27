const {User} = require("../models/User")
const Connection = require("../models/Connection")

exports.accepted = async(req,res)=>{
    const loginUserId =  req.user._id
    const requestUserId = req.params.userId
    req.connectionDocument.connectionStatus = "accepted"
    try {
        await req.connectionDocument.save();
        res.send("Connection accepted!")
    } catch (err) {
        console.log(err)
        res.status(401).json("Something went wrong!")
    }

}

exports.interested = async (req,res)=>{
    const toUserId = req.params.userId
    const fromUserId = req.user._id
    
    try {
        const user = await User.findById(toUserId).select('-password')

        if(toUserId===fromUserId){
            res.status(401).json({
                "message": "Cannot send connection to yourself!"
            })
        }

        const isConnected = await Connection.findOne({
            $or:[
                {toUserId:toUserId, fromUserId:fromUserId},
                {toUserId:fromUserId, fromUserId:toUserId} 
            ]
        })

        if(!isConnected){
            const connectionRequest = new Connection({
                toUserId: toUserId,
                fromUserId: fromUserId, 
                connectionStatus: 'interested'
            })
            try {
                await connectionRequest.save()
                res.status(200).json("Connection sent succesfully!")
            } catch (err) {
                console.log(err)
                res.status(401).json({
                    "message": "Something went wrong user not saved."
                })                    
            }
        }
        else{
            res.status(401).json({
                "message": "Connection already present!"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({
            "message": "User not found!"
        })
    }
  
}

exports.ignored = async(req,res)=>{
    
}

exports.rejected = async(req,res)=>{
    
}

