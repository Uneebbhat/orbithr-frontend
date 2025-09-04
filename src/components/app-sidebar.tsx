"use client";

import {
  DollarSign,
  DoorOpen,
  Fingerprint,
  HelpCircle,
  LayoutDashboard,
  Settings,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { NavSecondary } from "@/components/nav-secondary";

import Link from "next/link";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Employees",
      url: "/employees",
      icon: UsersRound,
    },
    {
      title: "Attendance",
      url: "/attendance",
      icon: Fingerprint,
    },
    {
      title: "Leaves",
      url: "/leaves",
      icon: DoorOpen,
    },
    {
      title: "Payrool",
      url: "/payrool",
      icon: DollarSign,
    },
    {
      title: "Recruitment",
      url: "/recruitment",
      icon: UserRoundSearch,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Get Help",
      url: "/get-help",
      icon: HelpCircle,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard">
                <Image
                  src={"/logo.png"}
                  alt="OrbitHR"
                  width={100}
                  height={100}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
