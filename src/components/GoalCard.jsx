import React from "react";
import wallet from "../assets/goal.png";

function GoalCard() {
  return (
    <div className="goal-card">
      <div className="goal-image">
        <img src={wallet} alt="Wallet" />
      </div>

      <h2>Track. Save. Achieve.</h2>

      <p>
        Manage your money better <br />
        and achieve your financial goals.
      </p>

      <button className="goal-btn">
        Set a Goal
      </button>
    </div>
  );
}

export default GoalCard;