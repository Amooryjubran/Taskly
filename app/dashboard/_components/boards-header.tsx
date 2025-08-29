import { BarChart3 } from "lucide-react";
export default function BoardsHeader() {
  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8 py-6 max-w-7xl">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg grid place-items-center">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Manage your projects and track progress across your workspace
        </p>
      </div>
    </header>
  );
}
