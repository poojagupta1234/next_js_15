'use client';

import { useState } from "react";
import { registrationSchema, RegistrationFormData } from "@/app/schemas/userSchema";

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = registrationSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
      for (const key in validation.error.flatten().fieldErrors) {
        const msg = validation.error.flatten().fieldErrors[key as keyof RegistrationFormData]?.[0];
        if (msg) fieldErrors[key as keyof RegistrationFormData] = msg;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setFormData({ name: "", email: "", password: "" });
      } else {
        setMessage("Server error: " + JSON.stringify(data.error));
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 shadow-lg rounded-2xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
            <h2 className="text-2xl font-bold text-center text-gray-800 bg-green-400 p-2">Register </h2>

        {message && (
          <div className="text-sm px-4 py-2 rounded bg-green-100 text-green-700 border border-green-300">
            {message}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Submit
        </button>
      </form>

    </div>
  );
}
