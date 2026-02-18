"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Eye, SquarePen, Trash2 } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserDataType = {
    id: string
    name: string
    user_photo: string
    email: string
    phone: string
    dob: string
    country: string
}

export const columns = (setEditingUser: (user: UserDataType) => void): ColumnDef<UserDataType>[] => [
    {
        accessorKey: "user_photo",
        header: "Profile Picture"
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email Address",
    },
    {
        accessorKey: "phone",
        header: "Phone Number",
    },
    {
        accessorKey: "dob",
        header: "Date of Birth",
    },
    {
        accessorKey: "country",
        header: "Country/Region",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;

            const handleEdit = () => {

                // router.push(`/super-admin/edit-business/${business.id}/`);
            };

            const handleViewDetails = async () => {
                // try {
                //     const response = await api.patch(`/api/business/${business.id}/update/`,
                //         {
                //             is_locked: !business.is_locked
                //         },
                //     );
                //     console.log("Lock status updated:", response.data);
                //     // We may want to refresh the table data here or use a state management solution
                //     // to update the UI immediately
                //     window.location.reload(); // Simple reload
                //     toast.success(business.is_locked ? "Account Unlocked" : "Account Locked");
                // }
                // catch (error) {
                //     console.error("Error updating lock status:", error);
                //     toast.error("Failed to update status");
                // }
            };

            const handleDelete = async () => {
                // try {
                //     const response = await api.delete(`/api/business/${business.id}/delete/?delete_user=true`);
                //     window.location.reload(); // Simple reload
                //     toast.success("Deleted", {
                //         description: "Business Deleted.",
                //     });
                //     console.log("Business Deleted", response.data);
                //     // We may want to refresh the table data here or use a state management solution
                //     // to update the UI immediately
                // }
                // catch (error) {
                //     console.error("Error deleting", error);
                //     toast.error("Delete failed", {
                //         description: "Could not delete the business. Please try again."
                //     });
                // }
            };

            return (
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setEditingUser(user)}
                        className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#094AAA1F]
                        cursor-pointer"
                    >
                        <SquarePen className="h-4 w-4 text-[#094AAA]" />
                    </button>
                    <button
                        onClick={handleViewDetails}
                        className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#6E76001F]
                        cursor-pointer"
                    >
                        <Eye className="h-4 w-4 text-[#6E7600]" />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#FFEBEB]
                        cursor-pointer"
                    >
                        <Trash2 className="text-[#FF2525]" />
                    </button>
                </div>
            );
        },
    }
]
