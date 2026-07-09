import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();

    console.log("Transactions:", transactions);

    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

export default router;