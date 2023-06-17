const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("Server listening..."));

module.exports = router;
