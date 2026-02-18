"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import api from "@/lib/axiosInterceptor";

const ResetPasswordSchema = z.object({
    newPassword: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z
        .string()
        .min(1, "Please confirm your password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

// Infer the TypeScript type from the schema
type ResetPasswordData = z.infer<typeof ResetPasswordSchema>;

export default function ResetPassword() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordData>({ // Add type parameter here
        resolver: zodResolver(ResetPasswordSchema),
        mode: "onChange", // Add this for immediate validation
        defaultValues: {
            newPassword: "",
            confirmPassword: ""
        }
    });

    const onSubmit = async (data: ResetPasswordData) => {
        console.log("Password reset data:", data);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast.success("Password Reset Successful", {
            description: "Your password has been reset successfully.",
        });

        // router.push('/login');

        router.push('/password-changed');

        // try {
        //   const response = await api.post("/api/auth/login/",
        //     {
        //       email: data.emailAddress,
        //       password: data.password
        //     },
        //   );
        //   // console.log(response?.data);

        //   const accessToken = response?.data?.tokens?.access;
        //   const refreshToken = response?.data?.tokens?.refresh;

        //   // console.log("ff",user,email);
        //   if (!accessToken) {
        //     // Add toast for no token
        //     toast.error("Authentication Failed", {
        //       description: "No authentication token received.",
        //     });
        //     throw new Error("No authentication token received");
        //   }

        //   // Store the token
        //   localStorage.setItem('access_token', accessToken);
        //   localStorage.setItem('refresh_token', refreshToken);
        //   localStorage.setItem('n1X_ang@xinl23446', response?.data?.user?.id);

        //   localStorage.setItem('user_name', response?.data?.user?.full_name);
        //   localStorage.setItem('user_email', response?.data?.user?.email);
        //   localStorage.setItem('user_phone', response?.data?.user?.phone_number);
        //   localStorage.setItem('user_photo', response?.data?.user?.profile_image);

        //   // Add success toast
        //   toast.success("Login Successful", {
        //     description: `Welcome back, ${response?.data?.user?.full_name || 'User'}!`,
        //   });

        //   // setAuth({ accessToken: token });

        //   // Now redirect based on role
        //   if (response?.data?.user?.is_superuser === true) {
        //     router.push("/super-admin/dashboard");
        //   } else {
        //     router.push("/admin/withSidebar/dashboard");
        //   }
        // }
        // catch (err: any) {
        //   // Add toast notifications for errors
        //   console.log("Error:", err?.response);
        //   if (!err?.response) {
        //     toast.error("Network Error", {
        //       description: "Unable to connect to server. Please check your connection.",
        //     });
        //   } else if (err?.response?.status === 400) {
        //     console.log('Missing Username or Password');
        //     toast.error("Invalid Input", {
        //       description: "Please enter correct email and password.",
        //     });
        //   } else if (err?.response?.status === 401) {
        //     console.log('Unauthorized');
        //     toast.error("Login Failed", {
        //       description: "Invalid email or password. Please try again.",
        //     });
        //   } else if (err?.response?.status === 404) {
        //     toast.error("Account Not Found", {
        //       description: "No account exists with this email.",
        //     });
        //   } else {
        //     toast.error("Login Failed", {
        //       description: "Something went wrong. Please try again.",
        //     });
        //   }
        // }
    };

    return (
        <div className="w-full h-screen bg-[url(/Login-Background.png)] bg-cover bg-center
    flex items-center justify-center">
            {/* <div className="absolute w-full h-full z-10 bg-[]" /> Overlay */}
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-full h-[500px] 
        flex flex-col items-center justify-center gap-3 p-3 lg:p-10 m-3 bg-[#FFFFFF] 
        border rounded-lg">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <h1 className="font-bold font-nunito text-[#0E0E0E] text-2xl">Pearii</h1>
                    <h1 className="font-bold font-nunito text-[#0E0E0E] text-2xl mt-6">
                        Reset Password</h1>
                    <p className="font-nunito text-[#7A7A7A] text-sm">The password must be
                        different than before</p>
                </div>

                <div className="w-full grid gap-2 items-center mt-7">
                    <div className="relative w-full">
                        <Input
                            type={showPassword1 ? "text" : "password"}
                            id="new-password"
                            placeholder="********"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base" // leave space for the eye button
                            {...register("newPassword")}
                        />
                        {/* <LockKeyhole className="absolute top-2.5 left-2.5 w-5 h-5" /> */}
                        <label htmlFor="new-password" className="absolute left-5 top-0 
                        -translate-y-1/2 bg-white px-1 py-0.5 text-sm font-normal 
                        text-[#3F3F3F]">
                            New Password
                        </label>
                        <button type="button" className="absolute right-3 top-3.5 cursor-pointer"
                            onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                    {errors.newPassword && (
                        <p className="text-red-500 text-sm font-nunito">{
                            errors.newPassword.message}</p>
                    )}
                </div>

                <div className="w-full grid gap-2 items-center mt-7">
                    <div className="relative w-full">
                        <Input
                            type={showPassword2 ? "text" : "password"}
                            id="confirm-password"
                            placeholder="********"
                            className="rounded-full pl-5 font-nunito bg-white text-[#3F3F3F] 
                            text-base" // leave space for the eye button
                            {...register("confirmPassword")}
                        />
                        {/* <LockKeyhole className="absolute top-2.5 left-2.5 w-5 h-5" /> */}
                        <label htmlFor="confirm-password" className="absolute left-5 top-0 
                        -translate-y-1/2 bg-white px-1 py-0.5 text-sm font-normal text-[#3F3F3F]">
                            Confirm Password
                        </label>
                        <button type="button" className="absolute right-3 top-3.5 cursor-pointer"
                            onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm font-nunito">{
                            errors.confirmPassword.message}</p>
                    )}
                </div>

                <div className="w-full mt-8">
                    <Button type="submit" className="w-full rounded-full font-medium font-nunito 
          cursor-pointer bg-[#116D66] text-base text-[#F3F3F3] hover:scale-105 
          hover:shadow-lg" disabled={isSubmitting}>
                        {isSubmitting ? "Resetting Password..." : "Reset Password"}
                    </Button>
                </div>
            </form>
        </div>
    );
}