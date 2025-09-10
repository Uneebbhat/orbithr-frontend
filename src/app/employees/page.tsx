import EmployeesAnalyticsCards from "@/modules/employees/components/employees-analytics-cards";
import DepartmentDistributionChart from "@/modules/employees/components/department-distribution-chart";

import { Metadata } from "next";
import EmployeeDataTable from "@/modules/employees/components/employee-data-table";
import { Suspense } from "react";
import Loader from "@/modules/employees/components/loader";

export const metadata: Metadata = {
  title: "OrbitHR | Employees",
  description:
    "Manage your employees efficiently with OrbitHR's comprehensive employee management tools.",
};

export default function EmployeesPage() {
  return (
    <>
      <section className="px-4 md:px-6">
        <h1 className="text-2xl font-bold">Employees Overview</h1>
      </section>

      <Suspense fallback={<Loader title="Loading employee analytics" />}>
        <EmployeesAnalyticsCards />
      </Suspense>

      <Suspense
        fallback={<Loader title="Loading department distribution chart" />}
      >
        <DepartmentDistributionChart />
      </Suspense>

      <section className="px-4 md:px-6">
        <Suspense fallback={<Loader title="Loading employee data table" />}>
          <EmployeeDataTable />
        </Suspense>
      </section>
    </>
  );
}
