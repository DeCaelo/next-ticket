"use client";

import { usePathname } from "next/navigation";

import { SidebarInset } from "@/src/components/ui/sidebar";

import { matchRoute, routeConfig } from "../paths";

export default function Page() {
  const pathname = usePathname();
  const matchedPath = matchRoute(pathname);
  const route = matchedPath ? routeConfig[matchedPath] : null;

  if (!route) {
    return <div>Page not found</div>;
  }

  const CurrentComponent = route.component;

  const content = <CurrentComponent />;

  if (route.showSidebar) {
    return (
      <div className="flex h-screen">
        <SidebarInset>{content}</SidebarInset>
      </div>
    );
  }

  return <div className="w-full">{content}</div>;
}
