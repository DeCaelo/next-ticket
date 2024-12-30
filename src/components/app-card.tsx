import React from "react";

import { cn } from "../lib/utils";

export function AppCard({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-96 flex-col justify-between rounded-lg border p-4 shadow-sm ring-inset",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AppCardContent({ children }: { children?: React.ReactNode }) {
  return <div className="">{children}</div>;
}

export function AppCardIcon({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mb-4 inline-flex size-8 items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AppCardName({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn("font-semibold", className)}>{children}</h2>;
}

export function AppCardDescription({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-muted-foreground mt-1 text-sm leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function AppCardFooter({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-6 border-t pt-3", className)}>{children}</div>;
}
