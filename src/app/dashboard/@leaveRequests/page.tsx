import LeaveRequestCards from "@/modules/auth/components/leave-request-cards";

export default async function LeaveRequestsPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // throw new Error("Failed to load data");
  return (
    <>
      <section className="w-full">
        <LeaveRequestCards />
      </section>
    </>
  );
}
