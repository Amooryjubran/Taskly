import { Button } from "@/components/ui/button";
import { Grid3x3, List, Filter, Plus } from "lucide-react";

export default function BoardsToolbar({
  viewMode,
  onChangeView,
  onCreate,
  onFilter,
}: {
  viewMode: "grid" | "list";
  onChangeView: (v: "grid" | "list") => void;
  onCreate: () => void;
  onFilter?: () => void;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Your Boards</h2>
        <p className="text-muted-foreground">
          Organize and manage your work across projects
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-xl bg-muted/50 p-1.5 shadow-sm border border-border/50 backdrop-blur-sm">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => onChangeView("grid")}
            className="h-8 px-3 rounded-lg"
          >
            <Grid3x3 className="h-4 w-4 mr-1.5" /> Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => onChangeView("list")}
            className="h-8 px-3 rounded-lg"
          >
            <List className="h-4 w-4 mr-1.5" /> List
          </Button>
        </div>
        <Button
          onClick={onCreate}
          className="h-8 px-4 text-xs font-medium shadow"
        >
          <Plus className="h-4 w-4 mr-2" /> Create Board
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onFilter}
          className="h-8 px-3"
        >
          <Filter className="h-4 w-4 mr-2" /> Filter & Sort
        </Button>
      </div>
    </div>
  );
}
