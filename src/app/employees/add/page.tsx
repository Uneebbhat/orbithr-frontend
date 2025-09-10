import Loader from "@/modules/employees/components/loader";
import AddressForm from "@/modules/employees/add/components/address-form";
import ContactForm from "@/modules/employees/add/components/contact-form";
import EmployeeIdentityForm from "@/modules/employees/add/components/employee-identity-form";
import GeneralInformationForm from "@/modules/employees/add/components/general-information-form";

import { Metadata } from "next";
import { Suspense } from "react";

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

      <section className="px-4 md:px-6">
        <h2 className="text-xl font-bold mb-6">General Information</h2>
        <Suspense
          fallback={<Loader title="Loading general information form" />}
        >
          <GeneralInformationForm />
        </Suspense>
      </section>

      <section className="px-4 md:px-6 mt-8">
        <h2 className="text-xl font-bold mb-6">Employee Identity</h2>
        <Suspense fallback={<Loader title="Loading employee identity form" />}>
          <EmployeeIdentityForm />
        </Suspense>
      </section>

      <section className="px-4 md:px-6 mt-8">
        <h2 className="text-xl font-bold mb-6">Address</h2>
        <Suspense fallback={<Loader title="Loading address form" />}>
          <AddressForm />
        </Suspense>
      </section>

      <section className="px-4 md:px-6 mt-8">
        <h2 className="text-xl font-bold mb-6">Contact</h2>
        <Suspense fallback={<Loader title="Loading contact form" />}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}
