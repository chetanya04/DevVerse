const express = require("express");
const Problem = require("../models/problem");

const router = express.Router();

router.post("/problems", async (req, res) => {
    const { category, details } = req.body;
  
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }
  
    try {
      const newProblem = new Problem({ category, details });
      await newProblem.save();
      res.status(201).json({ message: "Problem submitted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
    }
  });

module.exports = router;
