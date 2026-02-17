"use client"
import { div } from 'framer-motion/client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: '2010',
        uv: 4000,
    },
    {
        name: '2011',
        uv: 3000,
    },
    {
        name: '2012',
        uv: 2000,
    },
    {
        name: '2013',
        uv: 2780,
    },
    {
        name: '2014',
        uv: 1890,
    },
    {
        name: '2015',
        uv: 2390,
    },
    {
        name: '2016',
        uv: 3490,
    },
    //   {
    //     name: 'Page H',
    //     uv: 4000,
    //   },
    //   {
    //     name: 'Page I',
    //     uv: 3000,
    //   },
    //   {
    //     name: 'Page J',
    //     uv: 2000,
    //   },
    //   {
    //     name: 'Page K',
    //     uv: 2780,
    //   },
    //   {
    //     name: 'Page L',
    //     uv: 1890,
    //   },
    //   {
    //     name: 'Page M',
    //     uv: 2390,
    //   },
    //   {
    //     name: 'Page N',
    //     uv: 3490,
    //   },
];

export default function SimpleBarChart() {
    return (
        <div className='bg-white shadow-lg rounded-lg p-5 m-5'>
            <h1 className='font-bold font-nunito text-xl mb-6'>Total Users Registered</h1>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <defs>
                        <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#116D66" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.3} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="url(#colorBar)" activeBar={{ fill: 'gold', stroke: 'purple' }}
                        radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};