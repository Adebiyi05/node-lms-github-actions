const express = require("express");
const router = express.Router();

const courses = [];

router.post("/", (req, res) => {
  const course = { id: courses.length + 1, title: req.body.title, lessons: [] };
  courses.push(course);
  res.status(201).json(course);
});

router.get("/", (req, res) => {
  res.json(courses);
});

module.exports = router;

