"use client";

import { loginSchema } from "@/app/schemas/loginSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data: LoginInput) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (res?.error) {
      setLoginError("Invalid credentials");
    } else {
      router.push("/profile");
      setLoginError(""); // Clear error on successful login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 bg-green-400 p-2">Login </h2>

        {loginError && (
          <div className="text-sm text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username : admin</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              {...register("username")}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password: admin</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              {...register("password")}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
