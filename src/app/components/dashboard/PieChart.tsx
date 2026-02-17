"use client"
import { Pie, PieChart, Sector, PieSectorDataItem, Tooltip, TooltipIndex, ResponsiveContainer, Cell }
    from 'recharts';

// #region Sample data
const data = [
    { name: 'Eat', value: 50 },
    { name: 'Workout', value: 45 },
    { name: 'Resources', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// #endregion
const renderActiveShape = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
}: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * (midAngle ?? 1));
    const cos = Math.cos(-RADIAN * (midAngle ?? 1));
    const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
    const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={(outerRadius ?? 0) + 6}
                outerRadius={(outerRadius ?? 0) + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${((percent ?? 1) * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default function CustomActiveShapePieChart({
    isAnimationActive = true,
    defaultIndex = undefined,
}: {
    isAnimationActive?: boolean;
    defaultIndex?: TooltipIndex;
}) {
    return (
        <div className='bg-white shadow-lg rounded-lg p-5 m-5'>
            <h1 className='font-bold font-nunito text-xl mb-6'>Activity</h1>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <Pie
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="50%"
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={() => null} defaultIndex={defaultIndex} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}