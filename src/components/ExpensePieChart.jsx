import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Food & Dining", value: 876.68, color: "#ec407a" },
  { name: "Transport", value: 501.02, color: "#3b82f6" },
  { name: "Shopping", value: 375.72, color: "#facc15" },
  { name: "Bills & Utilities", value: 250.48, color: "#22c55e" },
  { name: "Entertainment", value: 200.38, color: "#7c3aed" },
  { name: "Others", value: 300.52, color: "#64748b" },
];

export default function ExpensePieChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    
    <div className="Pichart-card">
      <div style={{ width: 250, height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <text
              x="50%"
              y="48%"
              textAnchor="middle"
              fill="#fff"
            >
              ${total.toFixed(2)}
            </text>

            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              fill="#aaa"
            >
              Total
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="legend">
        {data.map((item) => (
          <div key={item.name} className="legend-item">
            <span
              className="dot"
              style={{ background: item.color }}
            ></span>

            <span>{item.name}</span>

            <span>
              {((item.value / total) * 100).toFixed(0)}%
            </span>

            <span>${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>

    </div>
  );
}