import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import transactionRoutes from "./routes/transactions.js";
import transactionHistoryRoutes from "./routes/transactionHistory.js";
import loginRoutes from "./routes/login.js";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);

app.use("/api/login", loginRoutes);

app.use("/api/transactions", transactionRoutes);

app.use("/api/transaction-history", transactionHistoryRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/budget")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});