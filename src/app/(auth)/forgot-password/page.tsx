"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import api from "@/lib/axiosInterceptor";

const ForgotPasswordSchema = z.object({
    emailAddress: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
});

// Infer the TypeScript type from the schema
type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>;

export default function ForgotPassword() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordData>({ // Add type parameter here
        resolver: zodResolver(ForgotPasswordSchema),
        mode: "onChange", // Add this for immediate validation
        defaultValues: {
            emailAddress: "",
        }
    });

    const onSubmit = async (data: ForgotPasswordData) => {
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
                        Forgot your Password</h1>
                    <p className="font-nunito text-[#7A7A7A] text-sm">Enter your Email account
                        to reset Password</p>
                </div>

                <div className="w-full grid gap-2 items-center mt-4">
                    <div className="relative w-full">
                        <Input type="text" id="emailAddress" placeholder="fahim@gmail.com"
                            className="rounded-full pl-5 font-nunito bg-[#F2F2F2] text-[#3F3F3F] 
              text-base"
                            {...register("emailAddress")}
                        />
                        <label
                            htmlFor="emailAddress"
                            className="absolute left-5 top-0 -translate-y-1/2 
                            bg-white px-1 py-0.5 text-sm font-normal text-[#3F3F3F]"
                        >
                            Email
                        </label>
                    </div>
                    {errors.emailAddress && (
                        <p className="text-red-500 text-sm font-nunito">
                            {errors.emailAddress.message}</p>
                    )}
                </div>

                <div className="w-full mt-16">
                    <Button type="submit" className="w-full rounded-full font-bold 
                    font-nunito cursor-pointer bg-[#116D66] text-base text-[#F3F3F3] 
                    hover:scale-105 hover:shadow-lg" disabled={isSubmitting}
                        onClick={() => router.push('/verification-code')}>
                        {isSubmitting ? "Continuing..." : "Continue"}
                    </Button>
                </div>
            </form>
        </div>
    );
}