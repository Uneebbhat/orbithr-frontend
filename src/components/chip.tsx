"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva("", {
  variants: {
    status: {
      Inactive: "bg-gray-200 border-gray-600 text-gray-800",
      Pending: "bg-yellow-200 border-yellow-600 text-yellow-800",
      Active: "bg-blue-200 border-blue-600 text-blue-800",
    },
  },
  defaultVariants: {
    status: "Active",
  },
});

export interface ChipProps
  extends React.ComponentPropsWithoutRef<typeof Badge>,
    VariantProps<typeof chipVariants> {}

function Chip({ className, status, ...props }: ChipProps) {
  return (
    <Badge className={cn(chipVariants({ status }), className)} {...props} />
  );
}

export { Chip, chipVariants };
