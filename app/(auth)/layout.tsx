export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] grid place-items-center px-6 py-24 bg-background relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
        <div className="relative w-full max-w-md">{children}</div>
      </div>
    </>
  );
}
