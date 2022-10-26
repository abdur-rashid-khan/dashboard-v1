import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Barchart from './chart/Bar';
import OrderChart from './chart/OrderChart';
import UserChart from './chart/UserChart';

const Overview = () => {

  return (
    <div className=' '>
      <Barchart></Barchart>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center">
        <UserChart className='w-full'></UserChart>
        <OrderChart className='w-full'></OrderChart>
      </div>
    </div>
  );
};

export default Overview;