"use client";

import { LucideKanban } from "lucide-react";
import Link from "next/link";

import { ThemeSwitcher } from "@/src/components/theme-switcher";
import { buttonVariants } from "@/src/components/ui/button";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 flex w-full animate-header-from-top justify-between border-b bg-background/95 px-5 py-2.5 backdrop-blur">
      <div className="align-items flex gap-x-2">
        <Link href={"/"} className={buttonVariants({ variant: "ghost" })}>
          <LucideKanban />
          <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div className="align-items flex gap-x-2">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export { Header };
