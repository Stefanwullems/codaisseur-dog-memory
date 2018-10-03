import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function(props) {
  const { data, colors } = props;
  return (
    <PieChart width={250} height={250}>
      <Pie data={data} dataKey="value" innerRadius={60} outerRadius={100}>
        <Cell fill={colors[0]} dataKey="correct" />
        <Cell fill={colors[1]} dataKey="incorrect" />
      </Pie>
    </PieChart>
  );
}
