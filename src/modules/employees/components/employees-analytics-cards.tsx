"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function EmployeesAnalyticsCards() {
  const departmentData = [
    { name: "Engineering", value: 60 },
    { name: "HR", value: 25 },
    { name: "Marketing", value: 30 },
    { name: "Sales", value: 37 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <section className="px-4 md:px-6 space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 @5xl/main:grid-cols-4">
        {/* Total Employees */}
        <Card>
          <CardHeader>
            <CardDescription>Total Employees</CardDescription>
            <CardTitle className="text-2xl font-semibold">152</CardTitle>
            <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
              <span>👨 Male: 90</span>
              <span>👩 Female: 62</span>
            </div>
          </CardHeader>
        </Card>

        {/* Active Today */}
        <Card>
          <CardHeader>
            <CardDescription>Active Today</CardDescription>
            <CardTitle className="text-2xl font-semibold">150</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              98% of workforce
            </p>
          </CardHeader>
        </Card>

        {/* On Leave Today */}
        <Card>
          <CardHeader>
            <CardDescription>On Leave Today</CardDescription>
            <CardTitle className="text-2xl font-semibold">12</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Mostly Annual Leave
            </p>
          </CardHeader>
        </Card>

        {/* Late Check-ins */}
        <Card>
          <CardHeader>
            <CardDescription>Late Check-ins</CardDescription>
            <CardTitle className="text-2xl font-semibold">5</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Compared to 8 yesterday
            </p>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
