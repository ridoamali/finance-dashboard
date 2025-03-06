// components/BarChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Income: 4000, Expense: 8400 },
  { name: 'Feb', Income: 3000, Expense: 1398 },
  { name: 'Mar', Income: 2000, Expense: 5000 },
  { name: 'Apr', Income: 2780, Expense: 3908 },
  { name: 'May', Income: 1890, Expense: 4800 },
  { name: 'Jun', Income: 2390, Expense: 3800 },
];

const CustomBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Income" fill="#a855f7" />
        <Bar dataKey="Expense" fill="#d8b4fe" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;