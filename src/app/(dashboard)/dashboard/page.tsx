import SimpleAreaChart from "@/app/components/dashboard/AreaChart";
import SimpleBarChart from "@/app/components/dashboard/BarChart";
import CustomActiveShapePieChart from "@/app/components/dashboard/PieChart";

export default function Dashboard() {
    return (
        <div>
            <SimpleBarChart />
            <div className="flex flex-col lg:flex-row lg:gap-2">
                <SimpleAreaChart />
                <CustomActiveShapePieChart />
            </div>
        </div>
    )
}