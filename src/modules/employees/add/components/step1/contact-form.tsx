import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="personalPhone">Personal Phone No</Label>
              <Input
                type="tel"
                placeholder="Personal Phone Number"
                id="personalPhone"
                name="personalPhone"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="emergencyPhone1">Emergency Phone 1</Label>
              <Input
                type="tel"
                placeholder="Emergency Phone 1"
                id="emergencyPhone1"
                name="emergencyPhone1"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="homePhone">Home Phone No</Label>
              <Input
                type="tel"
                placeholder="Home Phone Number"
                id="homePhone"
                name="homePhone"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="emergencyPhone2">Emergency Phone 2</Label>
              <Input
                type="tel"
                placeholder="Emergency Phone 2"
                id="emergencyPhone2"
                name="emergencyPhone2"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
