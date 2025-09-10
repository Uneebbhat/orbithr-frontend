import MultiStepForm from "@/modules/employees/add/components/multi-step-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Employee | Orbithr",
  description: "Add a new employee to the Orbithr system.",
};

export default function EmployeeAddPage() {
  return (
    <>
      <section className="px-4 md:px-6">
        <h1 className="text-2xl font-semibold">Add Employee</h1>
      </section>

      <MultiStepForm />
    </>
  );
}
