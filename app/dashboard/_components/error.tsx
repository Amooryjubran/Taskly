"use client";
import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-md animate-fade-in">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-destructive"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Unable to Load Workspace
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          We're having trouble connecting to your workspace. Please try
          refreshing the page.
        </p>
        <Button
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
}
