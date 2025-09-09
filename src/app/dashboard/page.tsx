import Loader from "@/modules/dashboard/components/loader";
import DashboardAnalyticsCards from "@/modules/dashboard/components/dashboard-analytics-cards";
import DashboardCalendar from "@/modules/dashboard/components/dashboard-calendar";
import EmployeeDataTable from "@/modules/dashboard/components/employee-data-table";
import LeaveRequestCards from "@/modules/dashboard/components/leave-request-cards";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "OrbitHR | Dashboard",
  description: "Manage your HR tasks efficiently with OrbitHR's dashboard.",
};

export default function DashboardPage() {
  return (
    <>
      <section className="px-4 md:px-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      </section>

      <Suspense fallback={<Loader title="Loading dashboard analytics" />}>
        <DashboardAnalyticsCards />
      </Suspense>

      <div className="grid grid-cols-1 gap-4 px-4 md:px-6 @xl/main:grid-cols-3">
        {/* Leave requests should span 2 cols on large screens */}
        <div className="col-span-1 @xl/main:col-span-2">
          <Suspense fallback={<Loader title="Loading leave requests" />}>
            <LeaveRequestCards />
          </Suspense>
        </div>

        {/* Calendar in last column */}
        <div className="col-span-1">
          <Suspense fallback={<Loader title="Loading calendar" />}>
            <DashboardCalendar />
          </Suspense>
        </div>
      </div>

      <section className="px-4 md:px-6">
        <Suspense fallback={<Loader title="Loading employees table" />}>
          <EmployeeDataTable />
        </Suspense>
      </section>
    </>
  );
}
