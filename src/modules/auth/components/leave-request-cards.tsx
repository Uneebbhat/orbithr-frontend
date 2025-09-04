import { Chip } from "@/components/chip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const request: any[] = [
  {
    id: "1",
    name: "Ali Khan",
    department: "Engineering Dept.",
    leaveType: "Annual Leave",
    dateRange: "Sep 5 - Sep 10, 2025",
    reason: "Family Event",
    status: "Pending",
  },
  {
    id: "2",
    name: "Ali Khan",
    department: "Engineering Dept.",
    leaveType: "Annual Leave",
    dateRange: "Sep 5 - Sep 10, 2025",
    reason: "Family Event",
    status: "Pending",
  },
  {
    id: "3",
    name: "Ali Khan",
    department: "Engineering Dept.",
    leaveType: "Annual Leave",
    dateRange: "Sep 5 - Sep 10, 2025",
    reason: "Family Event",
    status: "Pending",
  },
];

export default function LeaveRequestCards() {
  return (
    <>
      <ScrollArea className="h-[350px] md:h-auto border p-4 rounded-xl overflow-auto">
        <h2 className="text-xl font-bold mb-2">Leave Requests</h2>
        {request.length > 0 ? (
          request.map((req) => (
            <div key={req.id}>
              <Card>
                <CardContent className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="Ali Khan"
                        />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <div className="leading-tight">
                        <p className="font-semibold">{req.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {req.department}
                        </p>
                      </div>
                    </div>
                    <Chip status={"Pending"}>{req.status}</Chip>
                  </div>

                  {/* Leave Info */}
                  <div>
                    <p className="text-lg font-medium">{req.leaveType}</p>
                    <p className="text-sm text-muted-foreground">
                      {req.dateRange}
                    </p>
                    <p className="mt-1 text-sm">Reason: {req.reason}</p>
                  </div>

                  <div className="border-t pt-3 flex justify-end gap-2">
                    <Button variant="destructive">Reject</Button>
                    <Button>Approve</Button>
                  </div>
                </CardContent>
              </Card>
              <Separator className="my-4" />
            </div>
          ))
        ) : (
          <>
            <section className="px-4 md:px-6 flex items-center justify-center h-56">
              <p className="text-muted-foreground text-xl text-center">
                No leave requests today.
              </p>
            </section>
          </>
        )}
      </ScrollArea>
    </>
  );
}
