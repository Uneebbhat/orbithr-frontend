import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "../date-picker";
import { Label } from "@/components/ui/label";

export default function HiringForm() {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Half */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="hiringDate">Hiring Date</Label>
              <DatePicker placeholder="Hiring Date" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger className="w-full" name="status">
                  <SelectValue placeholder="Select status" id="status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="probation">Probation</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                  <SelectItem value="resigned">Resigned</SelectItem>
                  <SelectItem value="on-leave">On Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="office">Office</Label>
              <Select>
                <SelectTrigger className="w-full" name="office">
                  <SelectValue placeholder="Select office" id="office" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lahore">Lahore – DHA Phase 6</SelectItem>
                  <SelectItem value="lahore-arfa">
                    Lahore – Arfa Tower
                  </SelectItem>
                  <SelectItem value="islamabad">
                    Islamabad – Blue Area
                  </SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger className="w-full" name="department">
                  <SelectValue
                    placeholder="Select department"
                    id="department"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Half */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="joiningDate">Joining Date</Label>
              <DatePicker placeholder="Joining Date" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="employeeType">Employee Type</Label>
              <Select>
                <SelectTrigger className="w-full" name="employeeType">
                  <SelectValue placeholder="Select type" id="employeeType" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-Time</SelectItem>
                  <SelectItem value="part-time">Part-Time</SelectItem>
                  <SelectItem value="intern">Internship</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="manager">Manager</Label>
              <Select>
                <SelectTrigger className="w-full" name="manager">
                  <SelectValue placeholder="Select manager" id="manager" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uneeb-bhatti">Uneeb Bhatti</SelectItem>
                  <SelectItem value="minahil-awan">Minahil Awan</SelectItem>
                  <SelectItem value="ahmed-khan">Ahmed Khan</SelectItem>
                  <SelectItem value="fatima-noor">Fatima Noor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="designation">Designation</Label>
              <Select>
                <SelectTrigger className="w-full" name="designation">
                  <SelectValue
                    placeholder="Select designation"
                    id="designation"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software-engineer">
                    Software Engineer
                  </SelectItem>
                  <SelectItem value="frontend-developer">
                    Frontend Developer
                  </SelectItem>
                  <SelectItem value="backend-developer">
                    Backend Developer
                  </SelectItem>
                  <SelectItem value="product-manager">
                    Product Manager
                  </SelectItem>
                  <SelectItem value="hr-manager">HR Manager</SelectItem>
                  <SelectItem value="finance-officer">
                    Finance Officer
                  </SelectItem>
                  <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
