"use client"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { EatData } from "@/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { EatDataType } from "./columns";
import { useRouter, useSearchParams } from "next/navigation";
import EditEatForm from "@/app/components/Eat/EditEatForm";
import { Button } from "@/components/ui/button";
import ViewEat from "@/app/components/Eat/ViewEat";
import AddEatForm from "@/app/components/Eat/AddEatForm";


export default function UserManagement() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Edit
    const editingId = searchParams.get("edit");  // read from URL
    const editingEat = EatData.find((e) => e.id === editingId) ?? null;

    const EditEat = (eat: EatDataType) => {
        router.push(`?edit=${eat.id}`); // push to history
    };

    const handleBack = () => {
        router.back(); // browser back arrow works now
    };

    if (editingEat) {
        return <EditEatForm eat={editingEat} onBack={handleBack} />;
    }


    // Add
    const mode = searchParams.get("mode");
    if (mode === "add") {
        return <AddEatForm onBack={handleBack} />;
    }


    // View
    const ViewEatDetails = (eat: Eat_DataType) => {
        router.push(`?view=${eat.id}`);
    };

    const viewingId = searchParams.get("view");
    const viewingEat = EatData.find((e) => e.id === viewingId) ?? null;

    if (viewingEat) {
        return <ViewEat eat={viewingEat} onBack={handleBack} />;
    }

    return (
        <div className="px-12 py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold !font-nunito text-black text-2xl">List of recipes</h1>
                    <div className="relative w-full max-w-[300px]">
                        <Input
                            type="text"
                            id="password"
                            placeholder="Search recipes"
                            className="rounded-full pr-10 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                        // {...register("password")}
                        />
                        <button type="button" className="absolute right-3 top-2.5 cursor-pointer">
                            <Search />
                        </button>
                    </div>
                </div>
                <Button type="button" className="rounded-full font-medium font-nunito cursor-pointer 
                    bg-[#116D66] text-base text-[#F3F3F3] hover:scale-105 hover:shadow-lg"
                    onClick={() => router.push("?mode=add")}>
                    Add Recipes
                </Button>
            </div>
            <DataTable
                columns={columns(EditEat, ViewEat)}
                data={EatData}
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

















// "use client"
// import { EatData } from "@/data";
// import { DataTable } from "./data-table";
// import { columns } from "./columns";
// import { Eat_DataType } from "./columns";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import EditEatForm from "@/app/components/Eat/EditEatForm";
// import AddEatForm from "@/app/components/Eat/AddEatForm";


// export default function EatManagement() {
//     console.log(EatData);
//     const router = useRouter();
//     const searchParams = useSearchParams();

//     // Edit
//     const editingId = searchParams.get("edit");  // read from URL
//     const editingEat = EatData.find((eat) => eat.id === editingId) ?? null;

//     const EditEat = (eat: Eat_DataType) => {
//         router.push(`?edit=${eat.id}`); // push to history
//     };

//     const handleBack = () => {
//         router.back(); // browser back arrow works now
//     };

//     if (editingEat) {
//         return <EditEatForm eat={editingEat} onBack={handleBack} />;
//     }


//     // Add
//     const mode = searchParams.get("mode");
//     if (mode === "add") {
//         return <AddEatForm onBack={handleBack} />;
//     }


//     // View
//         const ViewUser = (user: UserDataType) => {
//             router.push(`?view=${user.id}`);
//         };
    
//         const viewingId = searchParams.get("view");
//         const viewingUser = EatData.find((u) => u.id === viewingId) ?? null;
    
//         if (viewingUser) {
//             return <ViewEat user={viewingUser} onBack={handleBack} />;
//         }

//     return (
//         <div className="px-12 py-6">
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                     <h1 className="font-bold !font-nunito text-black text-2xl">FAQ Listing</h1>
//                 </div>
//                 <Button type="button" className="rounded-full font-medium font-nunito cursor-pointer 
//                     bg-[#116D66] text-base text-[#F3F3F3] hover:scale-105 hover:shadow-lg"
//                     onClick={() => router.push("?mode=add")}>
//                     Add FAQ
//                 </Button>
//             </div>
//             <DataTable
//                 columns={columns(EditEat,ViewEat)}
//                 data={EatData}
//                 total={12}
//                 currentPage={1}
//             //onPageChange={handlePageChange}
//             />
//         </div>
//     );
// }




// // useSearchParams() is a hook, and hooks in Next.js/React are reactive —
// // when the URL search params change, useSearchParams() triggers a re-render of the component, just like
// // useState would.
// // So the flow is:
// // router.push(?edit=123)
// //     → URL changes
// //     → useSearchParams() detects the change
// //     → triggers re-render of page.tsx
// //     → searchParams.get("edit") now returns "123"
// //     → editingUser is found
// //     → edit form renders