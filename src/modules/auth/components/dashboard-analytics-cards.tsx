import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardAnalyticsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total Employees */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Employees</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            152
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">Growing workforce</div>
        </CardFooter>
      </Card>

      {/* Present Today */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Present Today</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            134
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">Good start to the week</div>
        </CardFooter>
      </Card>

      {/* On Leave Today */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>On Leave Today</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            18
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">Approved leave requests</div>
        </CardFooter>
      </Card>

      {/* Payroll Processed */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Payroll Processed</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $125,000
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            Payroll completed on time
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
