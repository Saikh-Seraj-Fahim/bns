"use client"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ContentData } from "@/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { UserDataType } from "./columns";
import { useRouter, useSearchParams } from "next/navigation";
import EditUserForm from "@/app/components/UserManagement/EditUserForm";
import { Button } from "@/components/ui/button";


export default function ContentManagement() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Edit
    const editingId = searchParams.get("edit");  // read from URL
    const editingContent = ContentData.find((c) => c.id === editingId) ?? null;

    const EditContent = (user: UserDataType) => {
        router.push(`?edit=${user.id}`); // push to history
    };

    const handleBack = () => {
        router.back(); // browser back arrow works now
    };

    if (editingContent) {
        return <EditUserForm user={editingContent} onBack={handleBack} />;
    }

    return (
        <div className="px-12 py-6">
            <h1 className="font-bold !font-nunito text-black text-2xl">Listing</h1>
            <DataTable
                columns={columns(EditContent)}
                data={ContentData}
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