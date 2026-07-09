import express from "express";
import TransactionHistory from "../models/TransactionHistory.js";

const router = express.Router();

// Get all transactions
router.get("/", async (req, res) => {
    try {
        const data = await TransactionHistory.find().sort({ createdAt: -1 });

        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add transaction
router.post("/", async (req, res) => {
    try {
        console.log(req.body);

        const transaction = new TransactionHistory(req.body);

        await transaction.save();

        res.status(201).json(transaction);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            error: error
        });
    }
});
export default router;