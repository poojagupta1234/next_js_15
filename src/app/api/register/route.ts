// app/api/register/route.ts
import { NextResponse } from "next/server";
import { registrationSchema } from "@/app/schemas/userSchema";

export async function POST(req: Request) {
  const body = await req.json();

  const parsed = registrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { name, email, password } = parsed.data;
  console.log("✅ Registration Data:", { name, email, password });

  // TODO: Save to database here

  return NextResponse.json({ message: "User registered successfully." }, { status: 200 });
}
