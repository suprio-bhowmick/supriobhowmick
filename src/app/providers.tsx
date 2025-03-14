"use client"; // Only needed if you're using App Router (Next.js 13+)

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // Prevents hydration mismatch

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
