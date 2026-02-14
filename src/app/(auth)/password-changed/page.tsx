"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PasswordChanged() {
    const router = useRouter();
    return (
        <div className="w-full h-screen bg-[url(/Login-Background.png)] bg-cover bg-center
    flex items-center justify-center">
            {/* <div className="absolute w-full h-full z-10 bg-[]" /> Overlay */}
            <div className="max-w-[500px] w-full h-[500px] flex flex-col items-center 
            justify-center gap-8 p-3 lg:p-10 m-3 bg-[#FFFFFF] border rounded-lg">
                <h1 className="font-bold font-nunito text-[#0E0E0E] text-2xl">
                    Pearii</h1>
                <h1 className="font-bold font-nunito text-[#0E0E0E] text-xl">
                    Password changed successfully!</h1>

                <div className="relative w-24 h-24">
                    <Image src="/password-changed-photo.png" alt="password-changed-photo"
                        fill />
                </div>

                <div className="w-full mt-6">
                    <Button type="submit" className="w-full rounded-full font-medium 
                    font-nunito cursor-pointer bg-[#116D66] text-base text-[#F3F3F3] 
                    hover:scale-105 hover:shadow-lg"
                        onClick={() => router.push('/login')}>
                        Back to login
                    </Button>
                </div>
            </div>
        </div>
    );
}
