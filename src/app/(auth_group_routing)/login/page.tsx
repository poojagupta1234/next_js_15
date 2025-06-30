


"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [role, setRole] = useState("admin");
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username,
      password,
      role,
      redirect: false,
    });

    if (res && !res.error) {
     
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
    <h1 className="semi-bold text-2xl">Login and Password both are admin for login </h1>
    <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
      <input
        className="border p-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="border p-2"
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
    </>
  );
}
