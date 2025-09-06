import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function EmployeeAddPage() {
  return (
    <>
      <section className="px-4 md:px-6">
        <h1 className="text-2xl font-semibold">Add Employee</h1>
      </section>

      <section className="px-4 md:px-6">
        <div>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <Button className="w-full">Login</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
