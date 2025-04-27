const express = require("express")
const {protect} = require("../middlewares/authMiddleware")
const Connection = require("../models/Connection")
const router = express.Router()


router.get("/profile", protect, (req, res) => {
    res.json({ user: req.user });
  });
  

router.get("/requests", protect, async (req, res)=>{
  try{
    const allRequests = await Connection.find({
      toUserId: req.user._id
    })
    allRequests.length?(res.send(allRequests)):(res.send("No pending requests."))
  }catch(err){
    console.log(err)
    res.status(404).json("Something went wrong.")
  }

  

})

module.exports = router;