import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const UserChart = () => {
  const data = [
    {
      name: 'January',
      visitor: 4000,
      user: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      visitor: 3000,
      user: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      visitor: 2000,
      user: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      visitor: 2780,
      user: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      visitor: 1890,
      user: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      visitor: 2390,
      user: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      visitor: 3490,
      user: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      visitor: 3490,
      user: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      visitor: 3490,
      user: 4300,
      amt: 2100,
    },
    {
      name: 'October',
      visitor: 6490,
      user: 5700,
      amt: 2100,
    },
    {
      name: 'November',
      visitor: 7490,
      user: 6300,
      amt: 2100,
    },
    {
      name: 'December',
      visitor: 8890,
      user: 6800,
      amt: 2100,
    },
  ];
  return (
    <div>
      <AreaChart width={530} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis  />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Area type="monotone" dataKey="user" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </div>
  );
};

export default UserChart;