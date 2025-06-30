export default async function DashboardPage({
  params,
}: Readonly<{
  params: Promise<{ role: string }>;
}>) {
  const { role } = await params;
  return <h1>Dashboard for role: {role}</h1>;
}
