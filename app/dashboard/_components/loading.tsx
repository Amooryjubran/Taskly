export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Loading Workspace
          </h3>
          <p className="text-muted-foreground text-sm">
            Preparing your dashboard...
          </p>
        </div>
      </div>
    </div>
  );
}
