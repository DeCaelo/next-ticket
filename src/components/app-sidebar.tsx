"use client";

import * as React from "react";
import { LucideBook, type LucideIcon, LucideLibrary } from "lucide-react";
import { usePathname } from "next/navigation";

import { NavMain } from "@/src/components/nav-main";
import { NavUser } from "@/src/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/src/components/ui/sidebar";

const homePath = () => "/";
const ticketsPath = () => "/tickets";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface NavigationItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

const getUserData = (): User => ({
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg"
});

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const navItems: NavigationItem[] = [
    {
      title: "All Tickets",
      url: homePath(),
      icon: LucideLibrary,
      isActive: pathname === homePath()
    },
    {
      title: "My Tickets",
      url: ticketsPath(),
      icon: LucideBook,
      isActive:
        pathname === ticketsPath() || pathname.startsWith(`${ticketsPath()}/`)
    }
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Vous pouvez ajouter ici un logo ou un titre */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={getUserData()} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
