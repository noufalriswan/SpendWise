import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
        return res.json({
            success: false,
            message: "Invalid email or password"
        });
    }

    res.json({
        success: true,
        user
    });
});

export default router;