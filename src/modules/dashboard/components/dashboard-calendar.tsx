"use client";

import { Calendar } from "@/components/ui/calendar";

import React, { useState } from "react";

export default async function DashboardCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border w-full"
    />
  );
}
