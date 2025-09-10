import Link from "next/link";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Step3() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center">
      <CheckCircle2 className="text-green-500 mb-4" size={64} />
      <h2 className="text-2xl font-bold mb-2">Success!</h2>
      <p className="text-muted-foreground mb-6">
        The employee has been added successfully.
      </p>
      <Button asChild>
        <Link href={"/employees"}>Go to Employees List</Link>
      </Button>
    </div>
  );
}
