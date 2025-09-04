import DashboardAnalyticsCards from "@/modules/auth/components/dashboard-analytics-cards";

export default async function DashboardAnalyticsCardsPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Test Sentry Error");
  return <DashboardAnalyticsCards />;
}
