const express = require("express")
const {accepted, rejected, ignored, interested} = require("../controllers/connectionController")
const router = express.Router()

// 4 connection status ['interested', 'accepted','rejected','ignored']

router.post("/interested/:userId", interested)
router.post("/rejected/:userId", rejected)
router.post("/accepted/:userId", accepted)
router.post("ignored/:userId", ignored)

module.exports = router;