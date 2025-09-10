import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EmployeeIdentityForm() {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="employeeCode">Employee Code</Label>
              <Input
                type="text"
                placeholder="Employee Code"
                id="employeeCode"
                name="employeeCode"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nationalId">National ID</Label>
              <Input
                type="text"
                placeholder="National ID"
                id="nationalId"
                name="nationalId"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
