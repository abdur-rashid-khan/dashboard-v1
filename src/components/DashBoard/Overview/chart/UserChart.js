import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const UserChart = () => {
  const data = [
    {
      name: 'January',
      currant: 5000,
      previous: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      currant: 4000,
      previous: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      currant: 3000,
      previous: 5800,
      amt: 2290,
    },
    {
      name: 'April',
      currant: 3780,
      previous: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      currant: 2890,
      previous: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      currant: 3390,
      previous: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      currant: 4490,
      previous: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      currant: 4490,
      previous: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      currant: 4490,
      previous: 4300,
      amt: 2100,
    },
    {
      name: 'October',
      currant: 6490,
      previous: 5700,
      amt: 2100,
    },
    {
      name: 'November',
      currant: 6790,
      previous: 6300,
      amt: 2100,
    },
    {
      name: 'December',
      currant: 7200,
      previous: 6800,
      amt: 2100,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart  data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#194AFE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#194AFE" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F36E6E" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F36E6E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
        <Legend />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area type="monotone" dataKey="currant" stroke="#194AFE" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="previous" stroke="#F36E6E" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;