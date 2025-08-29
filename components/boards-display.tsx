import Link from "next/link";
import { Plus } from "lucide-react";
import { Board } from "@/lib/supabase/models";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the props for the component
type BoardsDisplayProps = {
  boards: Board[];
  viewMode: "grid" | "list";
  onCreateBoard: () => void;
};
export function BoardsDisplay({
  boards,
  viewMode,
  onCreateBoard,
}: BoardsDisplayProps) {
  // A reusable component for the "Create new board" card
  const CreateBoardCard = () => (
    <Card
      onClick={onCreateBoard}
      className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer group"
    >
      <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
        <Plus className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
        <p className="mt-2 text-sm sm:text-base text-gray-600 group-hover:text-blue-600 font-medium">
          Create new board
        </p>
      </CardContent>
    </Card>
  );

  // A reusable component for rendering a single board
  const BoardCard = ({ board }: { board: Board }) => (
    <Link href={`/boards/${board.id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`w-4 h-4 ${board.color} rounded`} />
            <Badge variant="secondary" className="text-xs">
              New
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-base sm:text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {board.title}
          </CardTitle>
          <CardDescription className="text-sm mb-4">
            {board.description}
          </CardDescription>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 space-y-1 sm:space-y-0 ">
            <span>
              Created {new Date(board.created_at).toLocaleDateString()}
            </span>
            <span>
              Updated {new Date(board.updated_at).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
  if (boards.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">You don't have any boards yet.</p>
        <CreateBoardCard />
      </div>
    );
  }
  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
        <CreateBoardCard />
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-4">
      {boards.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
      <CreateBoardCard />
    </div>
  );
}
