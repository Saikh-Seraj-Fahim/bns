"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

// zod schema
const addFAQSchema = z.object({
    question: z.string().min(1, "Question is required"),
    answer: z.string().min(7, "Answer is too short"),
});

type AddFAQFormValues = z.infer<typeof addFAQSchema>;

interface AddFAQFormProps {
    onBack: () => void;
}

export default function AddFAQForm({ onBack }: AddFAQFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddFAQFormValues>({
        resolver: zodResolver(addFAQSchema),
        defaultValues: {
            question: "",
            answer: ""
        },
    });

    const onSubmit = (data: AddFAQFormValues) => {
        console.log("Updated data:", data);  // replace with API call
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4 sm:mx-16 my-8 p-5 border shadow-lg rounded-lg">
            <h1 className="font-bold font-nunito text-black text-xl">Add FAQ</h1>
            <div className="w-full h-[1px] bg-gray-300 mt-4" />

            <div className="flex flex-col items-center gap-12 mt-12">
                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full">
                        <Input type="text" id="question" placeholder="Type Question here"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base border border-black/45"
                            {...register("question")}
                        />
                        <label
                            htmlFor="question"
                            className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                        >
                            Question
                        </label>
                    </div>
                    {errors.question && (
                        <p className="text-red-500 text-sm font-nunito">{errors.question.message}</p>
                    )}
                </div>

                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full overflow-hidden pt-3">
                        <Textarea id="answer" placeholder="Type answer here"
                            className="rounded-4xl pl-5 font-nunito resize-none whitespace-normal break-words 
                            w-full overflow-hidden border border-black/45"
                            {...register("answer")}
                        />
                        <label
                            htmlFor="answer"
                            className="absolute left-5 top-3 -translate-y-1/2 bg-white px-1 py-0.5 
                            text-sm font-normal text-[#3F3F3F]"
                        >
                            Description Answer
                        </label>
                    </div>
                    {errors.answer && (
                        <p className="text-red-500 text-sm font-nunito">{errors.answer.message}</p>
                    )}
                </div>
            </div>

            <div className="mt-16">
                <Button type="submit" className="rounded-full font-bold font-nunito cursor-pointer
                bg-[#116D66] text-base text-[#F3F3F3] hover:scale-105 hover:shadow-lg px-16"
                // onClick={() => router.push('/verification-code')}
                >
                    Save
                </Button>
            </div>
        </form>
    );
}