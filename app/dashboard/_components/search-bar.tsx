import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search boards, projects, or team members...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-sm focus:shadow-lg focus:bg-card transition-all duration-200 text-sm rounded-xl"
      />
    </div>
  );
}
