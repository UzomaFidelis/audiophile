"use client";

import Header from "@/components/ui/header";
import ProgressBarProvider from "@/components/providers/progress-bar";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressBarProvider>
      <Header />
      {children}
    </ProgressBarProvider>
  );
}
