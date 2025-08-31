import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import Image from "next/image";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
            <h1 className="text-xl font-bold">Forgot Password?</h1>
            <div className="text-center text-sm">
              <p>
                Enter your account's email address and we&apos;ll send you a
                link to reset your password.
              </p>
            </div>
          </div>
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
            <Button className="w-full">Send reset link</Button>
          </div>

          <Separator />

          <div>
            <Button
              variant="secondary"
              size="icon"
              className="size-8 w-full"
              asChild
            >
              <Link href={"/login"}>
                <ArrowLeft />
                Back to login
              </Link>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
