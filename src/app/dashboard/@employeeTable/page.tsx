import EmployeeDataTable from "@/modules/auth/components/employee-data-table";

export default async function EmployeeTablePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to load data");
  return (
    <>
      <section className="px-4 md:px-6">
        <EmployeeDataTable />
      </section>
    </>
  );
}
