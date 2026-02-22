"use client"
import { FAQ_Data } from "@/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { FAQ_DataType } from "./columns";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import EditFAQForm from "@/app/components/FAQ/EditFAQForm";
import AddFAQForm from "@/app/components/FAQ/AddFAQForm";


export default function FAQManagement() {
    console.log(FAQ_Data);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Edit
    const editingId = searchParams.get("edit");  // read from URL
    const editingFAQ = FAQ_Data.find((faq) => faq.id === editingId) ?? null;

    const EditFAQ = (faq: FAQ_DataType) => {
        router.push(`?edit=${faq.id}`); // push to history
    };

    const handleBack = () => {
        router.back(); // browser back arrow works now
    };

    if (editingFAQ) {
        return <EditFAQForm faq={editingFAQ} onBack={handleBack} />;
    }


    // Add
    const mode = searchParams.get("mode");
    if (mode === "add") {
        return <AddFAQForm onBack={handleBack} />;
    }


    return (
        <div className="px-12 py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold !font-nunito text-black text-2xl">FAQ Listing</h1>
                </div>
                <Button type="button" className="rounded-full font-medium font-nunito cursor-pointer 
                    bg-[#116D66] text-base text-[#F3F3F3] hover:scale-105 hover:shadow-lg"
                    onClick={() => router.push("?mode=add")}>
                    Add FAQ
                </Button>
            </div>
            <DataTable
                columns={columns(EditFAQ)}
                data={FAQ_Data}
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