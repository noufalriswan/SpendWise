import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    title: {
      type: String,
      required: true
    },

    amount: {
      type: Number,
      required: true
    },

    type: {
      type: String,
      enum: ["Income", "Expense"],
      required: true
    },

    category: {
      type: String,
      required: true
    },

    paymentMethod: {
      type: String,
      default: "Cash"
    },

    note: {
      type: String,
      default: ""
    },

    date: {
      type: Date,
      default: Date.now
    },

    // Dashboard totals
    totalBalance: {
      type: Number,
    },

    totalIncome: {
      type: Number,
    },

    totalExpenses: {
      type: Number,
    },

    totalSavings: {
      type: Number,
    }
  },
  {
    timestamps: true,
    collection: "transaction"
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;