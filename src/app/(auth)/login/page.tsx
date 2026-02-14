"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import api from "@/lib/axiosInterceptor";

const LogInSchema = z.object({
  emailAddress: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

// Infer the TypeScript type from the schema
type LogInFormData = z.infer<typeof LogInSchema>;

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogInFormData>({ // Add type parameter here
    resolver: zodResolver(LogInSchema),
    mode: "onChange", // Add this for immediate validation
    defaultValues: {
      emailAddress: "",
      password: "",
      rememberMe: false
    }
  });

  const onSubmit = async (data: LogInFormData) => {
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
          <h1 className="font-bold font-nunito text-[#0E0E0E] text-2xl mt-6">Login</h1>
          <p className="font-nunito text-[#7A7A7A] text-sm">Enter your Email and
            password details</p>
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
              className="absolute left-5 top-0 -translate-y-1/2 bg-white px-1 py-0.5 
              text-sm font-normal text-[#3F3F3F]"
            >
              Email
            </label>
          </div>
          {errors.emailAddress && (
            <p className="text-red-500 text-sm font-nunito">{errors.emailAddress.message}</p>
          )}
        </div>

        <div className="w-full grid gap-2 items-center mt-7">
          <div className="relative w-full">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="rounded-full pl-5 font-nunito bg-[#F2F2F2] text-[#3F3F3F] 
              text-base" // leave space for the eye button
              {...register("password")}
            />
            {/* <LockKeyhole className="absolute top-2.5 left-2.5 w-5 h-5" /> */}
            <label htmlFor="password" className="absolute left-5 top-0 -translate-y-1/2 
            bg-white px-1 py-0.5 text-sm font-normal text-[#3F3F3F]">
              Password
            </label>
            <button type="button" className="absolute right-3 top-3.5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm font-nunito">{errors.password.message}</p>
          )}
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="remember-me"
                  checked={field.value} // needed for populating value
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                  }}
                />
              )}
            />
            <label
              htmlFor="remember-me"
              className="font-poppins text-[#313131] cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <Link href="/forgot-password" className="font-nunito text-[#FF504A] text-sm">
            Forgot password</Link>
        </div>

        <div className="w-full mt-8">
          <Button type="submit" className="w-full rounded-full font-medium font-nunito 
          cursor-pointer bg-[#116D66] text-base text-[#F3F3F3] hover:scale-105 
          hover:shadow-lg" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}