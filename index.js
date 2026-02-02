const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ app: "raderlms", status: "running" });
});

app.use("/users", require("./routes/users"));
app.use("/courses", require("./routes/courses"));
app.use("/enrollments", require("./routes/enrollments"));

module.exports = app;

