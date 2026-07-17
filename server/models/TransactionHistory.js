import mongoose from "mongoose";

const transactionHistorySchema = new mongoose.Schema(
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

    note: String,

    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "transactionHistory",
    timestamps: true
  }
);

export default mongoose.model(
  "TransactionHistory",
  transactionHistorySchema
);