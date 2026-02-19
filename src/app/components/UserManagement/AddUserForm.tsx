"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "@/components/ui/calendar";
import { Upload } from "lucide-react";

// zod schema
const addUserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(7, "Phone number is too short"),
    dob: z.string().min(1, "Date of birth is required"),
    country: z.string().min(1, "Country is required"),
});

type AddUserFormValues = z.infer<typeof addUserSchema>;

interface AddUserFormProps {
    onBack: () => void;
}

export default function AddUserForm({ onBack }: AddUserFormProps) {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<AddUserFormValues>({
        resolver: zodResolver(addUserSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            dob: "",
            country: "",
        },
    });

    const onSubmit = (data: AddUserFormValues) => {
        console.log("Updated data:", data);  // replace with API call
    };

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [profileImageUrl, setProfileImageUrl] = useState<string>("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4 sm:mx-16 my-8 p-5 border shadow-lg rounded-lg">
            <h1 className="font-bold font-nunito text-black text-xl">Add User Detail</h1>
            <div className="w-full h-[1px] bg-gray-300 mt-4" />
            <div className="flex items-end gap-6">
                {/* Box */}
                <label htmlFor="profile-upload" className="relative w-[300px] h-[230px] rounded-2xl 
                bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 
                transition overflow-hidden flex-shrink-0">
                    {profileImageUrl
                        ? <img src={profileImageUrl} alt="preview" className="w-full h-full object-cover" />
                        : <Upload className="w-10 h-10 text-gray-400" />
                    }
                    <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </label>

                {/* Button */}
                <div className="grid gap-1">
                    <label htmlFor="profile-upload"
                        className="rounded-full font-bold font-nunito cursor-pointer self-start
                    bg-[#116D66] text-base text-[#F3F3F3] px-4 py-2 hover:scale-105 
                    hover:shadow-lg transition">
                        Upload Image
                    </label>
                    {imageFile && (
                        <p className="font-nunito text-[#327EF9] text-xs">
                            Selected: {imageFile.name}
                        </p>
                    )}
                </div>
            </div>
            {/* <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                <div className="relative w-[300px] h-[230px] rounded-full mt-6">
                    <Image src="/balans-user.png" alt="user-photo" fill className="rounded-3xl" />
                </div>
                <Button type="button" className="rounded-full font-bold font-nunito cursor-pointer 
                bg-[#116D66] text-base text-[#F3F3F3] hover:bg-[#116D66] hover:text-[#F3F3F3] w-fit"
                // onClick={() => router.push('/verification-code')}
                >
                    Upload Image
                </Button>
            </div> */}

            <div className="flex flex-col xl:flex-row items-center gap-12 mt-12">
                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full">
                        <Input type="text" id="name" placeholder="Lucas"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                            {...register("name")}
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                        >
                            Name
                        </label>
                    </div>
                    {errors.name && (
                        <p className="text-red-500 text-sm font-nunito">{errors.name.message}</p>
                    )}
                </div>

                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full">
                        <Input type="text" id="emailAddress" placeholder="fahim@gmail.com"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                            {...register("email")}
                        />
                        <label
                            htmlFor="emailAddress"
                            className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                        >
                            Email
                        </label>
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm font-nunito">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-12 mt-8">
                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full">
                        <Input type="text" id="phone" placeholder="8452145230"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                            {...register("phone")}
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                        >
                            Phone Number
                        </label>
                    </div>
                    {errors.phone && (
                        <p className="text-red-500 text-sm font-nunito">{errors.phone.message}</p>
                    )}
                </div>

                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full">
                        {/* <Input type="text" id="dob" placeholder="fahim@gmail.com"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                        //{...register("emailAddress")}
                        /> */}
                        <Controller
                            name="dob"
                            control={control}
                            //rules={{ required: "Membership date is required" }}
                            render={({ field }) => (
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="date"
                                            type="button"
                                            className="w-full justify-start font-normal font-nunito bg-white 
                                            hover:bg-white text-[#3F3F3F] cursor-pointer rounded-full"
                                        >
                                            {date && !isNaN(date.getTime())
                                                ? date.toLocaleDateString('en-GB')  // always shows current selected date
                                                : "DD / MM / YYYY"}
                                            {/* (en-GB → 12/04/2027 style) */}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0"
                                        align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            onSelect={(selectedDate) => {
                                                if (selectedDate) {
                                                    setDate(selectedDate);
                                                    field.onChange(selectedDate.toISOString());
                                                    // important for RHF
                                                } else {
                                                    setDate(undefined);
                                                    field.onChange("");
                                                }
                                                setOpen(false);
                                            }}
                                            fromYear={2020}
                                            toYear={2090}
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                        <label
                            htmlFor="dob"
                            className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                        >
                            Date of Birth
                        </label>
                    </div>
                    {errors.dob && (
                        <p className="text-red-500 text-sm font-nunito">{errors.dob.message}</p>
                    )}
                </div>
            </div>

            <div className="w-full xl:w-1/2 grid gap-2 items-center mt-12">
                <div className="relative w-full">
                    <Input type="text" id="country" placeholder="United Kingdom"
                        className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base"
                        {...register("country")}
                    />
                    <label
                        htmlFor="country"
                        className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                    >
                        Country/Region
                    </label>
                </div>
                {errors.country && (
                    <p className="text-red-500 text-sm font-nunito">{errors.country.message}</p>
                )}
            </div>

            <div className="mt-16">
                <Button type="submit" className="rounded-full font-bold 
                    font-nunito cursor-pointer bg-[#116D66] text-base text-[#F3F3F3] 
                    hover:scale-105 hover:shadow-lg px-16"
                // onClick={() => router.push('/verification-code')}
                >
                    Save
                </Button>
            </div>
        </form>
    );
}