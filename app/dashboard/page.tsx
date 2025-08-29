"use client";
import { useState, useMemo } from "react";
import { useBoards } from "@/lib/hooks/useBoards";
import Loading from "./_components/loading";
import Error from "./_components/error";
import BoardsHeader from "./_components/boards-header";
import StatsRow from "./_components/stats-row";
import BoardsToolbar from "./_components/boards-toolbar";
import SearchBar from "./_components/search-bar";
import { BoardsDisplay } from "@/components/boards-display";

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [q, setQ] = useState("");
  const { createBoard, boards, loading, error } = useBoards();
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return boards;
    return boards.filter((b) =>
      [b.title, b.description ?? ""].some((t) => t?.toLowerCase().includes(s)),
    );
  }, [boards, q]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="min-h-screen bg-background">
      <BoardsHeader />
      <main className="container mx-auto px-6 lg:px-8 py-8 max-w-7xl">
        <StatsRow boards={boards} />
        <section>
          <BoardsToolbar
            viewMode={viewMode}
            onChangeView={setViewMode}
            onCreate={() => createBoard({ title: "New board" })}
          />
          <SearchBar value={q} onChange={setQ} />
          <BoardsDisplay
            boards={filtered}
            viewMode={viewMode}
            onCreateBoard={() => createBoard({ title: "New board" })}
          />
        </section>
      </main>
    </div>
  );
}
