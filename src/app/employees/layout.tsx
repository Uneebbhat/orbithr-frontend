import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Layout({
  children,
  employeesAnalytics,
  departmentDistributionChart,
  employeeDataTable,
}: {
  children: React.ReactNode;
  employeesAnalytics: React.ReactNode;
  departmentDistributionChart: React.ReactNode;
  employeeDataTable: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
      {employeesAnalytics}
      {departmentDistributionChart}
      {employeeDataTable}
    </DashboardLayout>
  );
}
