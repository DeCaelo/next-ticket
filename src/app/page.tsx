"use client";

import clsx from "clsx";

const HomePage = () => {
  return (
    <div
      className={clsx(
        "grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
        `color-scheme:;`
      )}
    >
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        TicketList
      </main>
    </div>
  );
};

export default HomePage;
