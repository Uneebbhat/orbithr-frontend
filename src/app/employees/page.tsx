import { Metadata } from "next";

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
    </>
  );
}
