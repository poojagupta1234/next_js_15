

import Link from "next/link";
export default function NotificationsPage() {
  return (
   <div className="display flex flex-col items-center justify-center bg-amber-300 h-[100px] w-full">
  Default Notifications Page
  <Link href="/complex-dashboard" className="p-4 underline">Default</Link>
   </div>
  );
}
