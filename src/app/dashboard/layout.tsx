import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Layout({
  children,
  leaveRequests,
  employeeTable,
  calendar,
}: {
  children: React.ReactNode;
  employeeTable: React.ReactNode;
  leaveRequests: React.ReactNode;
  calendar: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
