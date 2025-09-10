import Loader from "@/modules/employees/components/loader";
import AddressForm from "@/modules/employees/add/components/step1/address-form";
import ContactForm from "@/modules/employees/add/components/step1/contact-form";
import EmployeeIdentityForm from "@/modules/employees/add/components/step1/employee-identity-form";
import GeneralInformationForm from "@/modules/employees/add/components/step1/general-information-form";

import { Suspense } from "react";
import { Button } from "@/components/ui/button";

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <>
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

      <section className="px-4 md:px-6">
        <Button onClick={onNext}>Next</Button>
      </section>
    </>
  );
}
