import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrbitHR | Dashboard",
  description: "Manage your HR tasks efficiently with OrbitHR's dashboard.",
};

export default function DashboardPage() {
  return (
    <section className="px-4 md:px-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
    </section>
  );
}
