import { Loader2 } from "lucide-react";
export default function LoadingAnalyticsCards() {
  return (
    <div className="flex flex-col items-center justify-center h-40 gap-3 text-center">
      <Loader2
        className="w-10 h-10 animate-spin text-primary"
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-muted-foreground">
        Loading department distribution chart...
      </span>
    </div>
  );
}
