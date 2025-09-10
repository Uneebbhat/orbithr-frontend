import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddressForm() {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="state">State</Label>
              <Input type="text" placeholder="State" id="state" name="state" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Select>
                <SelectTrigger className="w-full" name="nationality">
                  <SelectValue placeholder="Nationality" id="nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pakistani">Pakistani</SelectItem>
                  <SelectItem value="notPakistani">Not Pakistani</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="permanentAddress">Permanent Address</Label>
              <Textarea
                placeholder="Permanent Address"
                id="permanentAddress"
                name="permanentAddress"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="city">City</Label>
              <Input type="text" placeholder="City" id="city" name="city" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="zipCode">Zip/Postal Code</Label>
              <Input
                type="text"
                placeholder="Zip/Postal Code"
                id="zipCode"
                name="zipCode"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="temporaryAddress">Temporary Address</Label>
              <Textarea
                placeholder="Temporary Address"
                id="temporaryAddress"
                name="temporaryAddress"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
