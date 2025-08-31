"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import useTogglePassword from "@/hooks/useTogglePassword";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center gap-2 font-medium">
              <div className="flex items-center justify-center rounded-md">
                <Image
                  src={"/logo.png"}
                  alt="OrbitHR"
                  width={200}
                  height={200}
                />
              </div>
              <span className="sr-only">OrbitHR</span>
            </div>
            <h1 className="text-xl font-bold">Reset Password</h1>
            <div className="text-center text-sm">
              <p>Enter your new password and login again to your account.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                {togglePassword ? (
                  <EyeOff
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <Eye
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
            </div>
            <Button className="w-full">Reset password</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
