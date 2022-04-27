const express = require("express");
const router = express.Router();
const usersApi = require("../../../controllers/api/v1/userreport");
router.post("/post", usersApi.createpost);
router.get("/", usersApi.getReport);
module.exports = router;
