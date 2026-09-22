import { Sparkles } from "lucide-react";

export default function Upgrade() {
  return (
    <div className="flex items-center gap-1">
      <Sparkles className="h-4 w-4" />
      <p className="text-muted-foreground text-xs">Upgrade</p>
    </div>
  );
}
