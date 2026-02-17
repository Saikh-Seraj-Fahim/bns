"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Mon',
        uv: 4000,
    },
    {
        name: 'Tue',
        uv: 3000,
    },
    {
        name: 'Wed',
        uv: 2000,
    },
    {
        name: 'Thu',
        uv: 2780,
    },
    {
        name: 'Fri',
        uv: 1890,
    },
    {
        name: 'Sat',
        uv: 2390,
    },
    {
        name: 'Sun',
        uv: 3490
    },
];


// #endregion
export default function SimpleAreaChart() {
    return (
        <div className='bg-white shadow-lg rounded-lg p-5 m-5'>
            <h1 className='font-bold font-nunito text-xl mb-3'>Active Users</h1>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF5B5B" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#FFFFFF00" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#FF3131"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>

        // <AreaChart
        //   style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        //   responsive
        //   data={data}
        //   margin={{
        //     top: 20,
        //     right: 0,
        //     left: 0,
        //     bottom: 0,
        //   }}
        //   onContextMenu={(_, e) => e.preventDefault()}
        // >
        //   <CartesianGrid strokeDasharray="3 3" />
        //   <XAxis dataKey="name" />
        //   <YAxis width="auto" />
        //   <Tooltip />
        //   <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        // </AreaChart>
    );
};


