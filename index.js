
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.post("/admit", (req, res) => {
  console.log("Admission data:", req.body);
  res.send({ status: "Admission received" });
});

app.post("/fee", (req, res) => {
  console.log("Fee data:", req.body);
  res.send({ status: "Fee received" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
