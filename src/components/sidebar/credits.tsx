import { Sparkles } from "lucide-react";

export default function Credits() {
  return (
    <div className="flex items-center gap-1">
      <Sparkles className="h-4 w-4" />
      <p className="text-muted-foreground text-xs">v0.0.1</p>
    </div>
  );
}
