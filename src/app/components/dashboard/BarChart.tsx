"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Page A',
        uv: 4000,
    },
    {
        name: 'Page B',
        uv: 3000,
    },
    {
        name: 'Page C',
        uv: 2000,
    },
    {
        name: 'Page D',
        uv: 2780,
    },
    {
        name: 'Page E',
        uv: 1890,
    },
    {
        name: 'Page F',
        uv: 2390,
    },
    {
        name: 'Page G',
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
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};