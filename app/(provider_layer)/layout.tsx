"use client";

import Header from "@/components/ui/header";
import ProgressBarProvider from "@/components/providers/progress-bar";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressBarProvider>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </ProgressBarProvider>
  );
}
