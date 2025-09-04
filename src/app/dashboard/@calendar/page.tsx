"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default async function CalendarPage() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border w-full"
    />
  );
}
