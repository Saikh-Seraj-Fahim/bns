import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { userData } from "@/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

// const handlePageChange() => {

// }

export default function UserManagement() {
    return (
        <div className="px-12 py-6">
            <div className="flex items-center gap-4">
                <h1 className="font-bold !font-nunito text-black text-2xl">Users Listing</h1>
                <div className="relative w-full max-w-[300px]">
                    <Input
                        type="text"
                        id="password"
                        placeholder="Search name"
                        className="rounded-full pr-10 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                    // {...register("password")}
                    />
                    <button type="button" className="absolute right-3 top-2.5 cursor-pointer">
                        <Search />
                    </button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={userData}
                total={12}
                currentPage={1}
            //onPageChange={handlePageChange}
            />
        </div>
    );
}