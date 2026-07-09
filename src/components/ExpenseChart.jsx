import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { expenseData } from "./data";

function ExpenseChart() {
  return (
    <div className="chart-card">
      <h3>Expense Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={expenseData}>
          <CartesianGrid stroke="#2e3b55" vertical={false} />

          <XAxis
            dataKey="day"
            tick={{ fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ff4d79"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;