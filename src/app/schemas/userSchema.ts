// app/schemas/userSchema.ts
import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
