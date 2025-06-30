import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';



const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
    throw new Error('JWT_SECRET environment variable is not defined');
}

export async function POST(req) {
      const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Dummy authentication logic (replace with DB)
  if (email === 'admin@example.com' && password === 'admin123') {
    const token = jwt.sign({ email, role: 'admin' }, SECRET, { expiresIn: '1h' });
     return NextResponse.json({ role: 'admin', token, email, password });
  }

  if (email === 'user@example.com' && password === 'user123') {
    const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
   return NextResponse.json({ role: 'user', token, email, password });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}