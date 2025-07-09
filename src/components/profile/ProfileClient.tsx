'use client';

import { Session } from 'next-auth';
import Image from 'next/image';

declare module 'next-auth' {
  interface User {
    role?: string;
  }

  interface Session {
    user?: User;
  }
}

export default function ProfileClient({ session }:  Readonly<{ session: Session | null }>) {
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white px-6 py-4 rounded-lg shadow text-red-600 font-medium">
          You are not logged in.
        </div>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow">
            <Image
              src={'/images/user-admin-svgrepo-com.svg'}
              alt="User Avatar"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user?.name ?? 'Anonymous'}</h2>
          <p className="text-gray-500 text-sm">{user?.email ?? 'Email not available'}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Role:{' '}
            <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
              {user?.role ?? 'User'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
