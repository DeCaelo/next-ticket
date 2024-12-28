"use client";

import { usePathname } from "next/navigation";

import { AppSidebar } from "@/src/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/src/components/ui/breadcrumb";
import { Separator } from "@/src/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/src/components/ui/sidebar";

import { matchRoute, routeConfig } from "../paths";

export default function Page() {
  const pathname = usePathname();
  const matchedPath = matchRoute(pathname);
  const route = matchedPath ? routeConfig[matchedPath] : null;

  if (!route) {
    return <div>Page not found</div>;
  }

  const CurrentComponent = route.component;

  const content = (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          {route.showSidebar && (
            <>
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </>
          )}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{route.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <CurrentComponent />
    </>
  );

  // Wrap with sidebar only for routes that need it
  if (route.showSidebar) {
    return (
      <div className="flex h-screen">
        <AppSidebar />
        <SidebarInset>{content}</SidebarInset>
      </div>
    );
  }

  // Return content directly for routes without sidebar
  return <div className="w-full">{content}</div>;
}
