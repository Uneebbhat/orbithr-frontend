import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Layout({
  children,
  analyticsCards,
  leaveRequests,
  employeeTable,
  calendar,
}: {
  children: React.ReactNode;
  analyticsCards: React.ReactNode;
  employeeTable: React.ReactNode;
  leaveRequests: React.ReactNode;
  calendar: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
      {analyticsCards}

      <div className="grid grid-cols-1 gap-4 px-4 md:px-6 @xl/main:grid-cols-3">
        {/* Leave requests should span 2 cols on large screens */}
        <div className="col-span-1 @xl/main:col-span-2">{leaveRequests}</div>

        {/* Calendar in last column */}
        <div className="col-span-1">{calendar}</div>
      </div>

      {employeeTable}
    </DashboardLayout>
  );
}
