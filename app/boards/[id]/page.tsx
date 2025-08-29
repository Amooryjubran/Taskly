export default async function BoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div className="min-h-screen bg-gray-50">Board Page {id}</div>;
}
