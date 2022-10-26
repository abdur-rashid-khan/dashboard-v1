import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Barchart = () => {
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
    <div className='container mx-auto px-2'>
      <BarChart width={730} height={250} data={data} 
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="user" fill="#8884d8" />
        <Bar dataKey="visitor" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Barchart;