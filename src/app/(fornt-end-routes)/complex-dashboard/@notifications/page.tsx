

import Link from "next/link";
export default function NotificationsPage() {
  return (
   <div className="display flex flex-col h-[100px] w-full items-center justify-center bg-blue-500">
 Archived Notifications Page
  <Link href="/complex-dashboard/archived" className="p-4 underline">Archived</Link>
   </div>
  );
}
