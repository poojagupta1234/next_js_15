import Dashboard from "@/components/ecom/dashboard/dashboard";
export default async function DashboardPage({
  params,
}: Readonly<{
  params: Promise<{ role: string }>;
}>) {
  const { role } = await params;
  return (
  <Dashboard role={role} />)
}
