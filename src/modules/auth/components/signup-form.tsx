"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import useTogglePassword from "@/hooks/useTogglePassword";

export function SignupForm({
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
            <h1 className="text-xl font-bold">Welcome to OrbitHR.</h1>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Log in
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
              />
            </div>
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

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
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
            <Button className="w-full">Signup</Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div>
            <Button variant="outline" type="button" className="w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link href="/">Terms of Service</Link> and{" "}
        <Link href="/">Privacy Policy</Link>.
      </div>
    </div>
  );
}
