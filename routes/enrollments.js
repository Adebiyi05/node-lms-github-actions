const express = require("express");
const router = express.Router();

const enrollments = [];

router.post("/", (req, res) => {
  const enrollment = { userId: req.body.userId, courseId: req.body.courseId };
  enrollments.push(enrollment);
  res.status(201).json(enrollment);
});

router.get("/", (req, res) => {
  res.json(enrollments);
});

module.exports = router;

