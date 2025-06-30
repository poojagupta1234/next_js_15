


export default async function Category({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <div className="card">category - {slug}</div>;
}