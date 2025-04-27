const mongoose = require('mongoose')

const connectionSchema = new mongoose.Schema({
    fromUserId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    toUserId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    connectionStatus:{
        type:String,
        enum:['interested', 'accepted', 'rejected', 'ignored'], 
        required:true
    }
})

const connectionModel = mongoose.model("connectionModel", connectionSchema)
module.exports = connectionModel