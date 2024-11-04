const express = require('express');
const {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom,
  } = require("../controllers/roomController");

const { auth } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getRooms);


router.post("/", auth, createRoom);

router.get("/:id", getRoom);

router.put("/:id", auth, updateRoom);

router.delete("/:id", auth, deleteRoom);

module.exports = router;
