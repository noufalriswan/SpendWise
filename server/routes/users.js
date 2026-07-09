import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find();

        console.log("Users:", users);

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

export default router;