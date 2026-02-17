import SimpleAreaChart from "@/app/components/dashboard/AreaChart";
import SimpleBarChart from "@/app/components/dashboard/BarChart";
import CustomActiveShapePieChart from "@/app/components/dashboard/PieChart";

export default function Dashboard() {
    return (
        <div>
            <SimpleBarChart />
            <div className="grid grid-cols-1 2xl:grid-cols-5 gap-4">
                <div className="2xl:col-span-3">
                    <SimpleAreaChart />
                </div>
                <div className="2xl:col-span-2">
                    <CustomActiveShapePieChart />
                </div>
            </div>
        </div>
    )
}
