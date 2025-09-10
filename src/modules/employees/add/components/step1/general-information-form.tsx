import ImageUpload from "@/components/image-upload";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function GeneralInformationForm() {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <ImageUpload uploadText="Upload employee image" />
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                type="date"
                placeholder="Date of Birth"
                id="dob"
                name="dob"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="religion">Religion</Label>
              <Select>
                <SelectTrigger className="w-full" name="religion">
                  <SelectValue placeholder="Religion" id="religion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="islam">Islam</SelectItem>
                  <SelectItem value="christian">Christian</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="gender" className="mb-2">
                Gender
              </Label>
              <RadioGroup defaultValue="male" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="felame" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="fatherName">Father Name</Label>
              <Input
                type="text"
                placeholder="Father Name"
                id="fatherName"
                name="fatherName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="motherName">Mother Name</Label>
              <Input
                type="text"
                placeholder="Mother Name"
                id="motherName"
                name="motherName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="qualification">Qualification</Label>
              <Select>
                <SelectTrigger className="w-full" name="qualification">
                  <SelectValue placeholder="Qualification" id="qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="associate">Associate Degree</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select>
                <SelectTrigger className="w-full" name="maritalStatus">
                  <SelectValue
                    placeholder="Marital Status"
                    id="maritalStatus"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Signle</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <ImageUpload uploadText="Upload CV" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
