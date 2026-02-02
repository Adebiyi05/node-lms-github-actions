const express = require("express");
const router = express.Router();

const users = [];

router.post("/", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;

