"use client"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { userData } from "@/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { UserDataType } from "./columns";
import { useRouter, useSearchParams } from "next/navigation";
import EditUserForm from "@/app/components/UserManagement/EditUserForm";

export default function UserManagement() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const editingId = searchParams.get("edit");  // read from URL
    const editingUser = userData.find((u) => u.id === editingId) ?? null;

    const EditingUser = (user: UserDataType) => {
        router.push(`?edit=${user.id}`); // push to history
    };

    const handleBack = () => {
        router.back(); // browser back arrow works now
    };

    if (editingUser) {
        return <EditUserForm user={editingUser} onBack={handleBack} />;
    }
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
                columns={columns(EditingUser)}
                data={userData}
                total={12}
                currentPage={1}
            //onPageChange={handlePageChange}
            />
        </div>
    );
}




// useSearchParams() is a hook, and hooks in Next.js/React are reactive —
// when the URL search params change, useSearchParams() triggers a re-render of the component, just like
// useState would.
// So the flow is:
// router.push(?edit=123)
//     → URL changes
//     → useSearchParams() detects the change
//     → triggers re-render of page.tsx
//     → searchParams.get("edit") now returns "123"
//     → editingUser is found
//     → edit form renders