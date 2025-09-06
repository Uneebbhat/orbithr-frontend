"use client";

import { Button } from "@/components/ui/button";

export default function DepartmentDistributionChartError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="px-4 md:px-6">
      <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5 text-destructive flex flex-col gap-2">
        <h2 className="font-semibold">
          ⚠️ Failed to load department distribution chart
        </h2>
        <p className="text-sm">{error.message}</p>
        <Button
          onClick={() => reset()}
          variant={"destructive"}
          className="w-fit"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
