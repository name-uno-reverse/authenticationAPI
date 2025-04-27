const express = require("express")
const {accepted, rejected, ignored, interested} = require("../controllers/connectionController")
const {protect} = require("../middlewares/authMiddleware")
const {validUserId} = require("../middlewares/userMiddleware")
const {validConnection} = require("../middlewares/connectionMiddleware")
const router = express.Router()

// 4 connection status ['interested', 'accepted','rejected','ignored']

router.post("/interested/:userId", protect, validUserId, interested)
router.post("/rejected/:userId", protect, validUserId, rejected)
router.post("/accepted/:userId", protect, validUserId, validConnection, accepted)
router.post("ignored/:userId", protect, validUserId, ignored)

module.exports = router;