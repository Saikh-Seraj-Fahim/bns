"use client"

import { ColumnDef } from "@tanstack/react-table"
import { SquarePen, Trash2 } from "lucide-react"
import { useDelete } from "@/app/DeleteContext"

export type FAQ_DataType = {
    id: string
    question: string
    answer: string
}

// Separate component so we can use hooks inside
function ActionCell({ faq, EditFAQ }: {
    faq: FAQ_DataType;
    EditFAQ: (faq: FAQ_DataType) => void;
}) {
    const { setIsDeleteOpen } = useDelete();

    return (
        <div className="flex items-center gap-3">
            <button
                className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#094AAA1F] cursor-pointer"
                onClick={() => EditFAQ(faq)}
            >
                <SquarePen className="h-4 w-4 text-[#094AAA]" />
            </button>
            <button
                className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#FFEBEB] cursor-pointer"
                onClick={() => setIsDeleteOpen(true)}
            >
                <Trash2 className="text-[#FF2525]" />
            </button>
        </div>
    );
}

export const columns = (
    EditFAQ: (faq: FAQ_DataType) => void,
): ColumnDef<FAQ_DataType>[] => [
        // {
        //     header: "Serial No."
        // },
        {
            accessorKey: "question",
            header: "Questions",
            cell: ({ row }) => (
                <div className="max-w-[300px] truncate" title={row.original.question}>
                    {row.original.question}
                </div>
            ),
        },
        {
            accessorKey: "answer",
            header: "Answer",
            cell: ({ row }) => (
                <div className="max-w-[300px] truncate" title={row.original.answer}>
                    {row.original.answer}
                </div>
            ),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => <ActionCell faq={row.original} EditFAQ={EditFAQ} />,
        }
    ]


// The title prop is important — it shows the full text on hover as a native tooltip,
// so users can still read the complete content.

// The key reason for extracting ActionCell is that hooks can't be called inside a plain cell callback — it's
// not a React component, so React won't recognize the hook call. Wrapping the cell content in its own component
// fixes that.
// Make sure DeleteProvider wraps your page in the layout so the context is available to both page.tsx and
// columns.tsx.





// "use client"

// import { ColumnDef } from "@tanstack/react-table"
// import { Eye, SquarePen, Trash2 } from "lucide-react"

// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.
// export type UserDataType = {
//     id: string
//     name: string
//     user_photo: string
//     email: string
//     phone: string
//     dob: string
//     country: string
// }

// export const columns = (EditUser: (user: UserDataType) => void): ColumnDef<UserDataType>[] => [
//     {
//         accessorKey: "user_photo",
//         header: "Profile Picture"
//     },
//     {
//         accessorKey: "name",
//         header: "Name",
//     },
//     {
//         accessorKey: "email",
//         header: "Email Address",
//     },
//     {
//         accessorKey: "phone",
//         header: "Phone Number",
//     },
//     {
//         accessorKey: "dob",
//         header: "Date of Birth",
//     },
//     {
//         accessorKey: "country",
//         header: "Country/Region",
//     },
//     {
//         id: "actions",
//         header: "Actions",
//         cell: ({ row }) => {
//             const user = row.original;

//             return (
//                 <div className="flex items-center gap-3">
//                     <button
//                         className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#094AAA1F]
//                         cursor-pointer"
//                         onClick={() => EditUser(user)}
//                     >
//                         <SquarePen className="h-4 w-4 text-[#094AAA]" />
//                     </button>
//                     <button
//                         // onClick={handleViewDetails}
//                         className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#6E76001F]
//                         cursor-pointer"
//                     >
//                         <Eye className="h-4 w-4 text-[#6E7600]" />
//                     </button>
//                     <button
//                         // onClick={handleDelete}
//                         className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#FFEBEB]
//                         cursor-pointer"
//                     >
//                         <Trash2 className="text-[#FF2525]" />
//                     </button>
//                 </div>
//             );
//         },
//     }
// ]
