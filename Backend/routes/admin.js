const express = require("express");
const router = express.Router();

const {
  adminLoginPost,
  userDetails,
  deleteUser,
} = require("../controller/adminController");

router.post("/", adminLoginPost);
router.get("/userDetails", userDetails);
router.post("/deleteUser", deleteUser);

module.exports = router;
