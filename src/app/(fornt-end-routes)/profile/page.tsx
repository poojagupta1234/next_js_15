import { getServerSession } from "next-auth";
//import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileClient from "@/components/profile/ProfileClient";

export default async function ProfilePage() {
  const session = await getServerSession();

  return <ProfileClient session={session} />;
}