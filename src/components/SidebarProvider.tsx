
import React, { ReactNode } from "react";
import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  return (
    <ShadcnSidebarProvider>
      <div className="flex w-full">
        {children}
      </div>
    </ShadcnSidebarProvider>
  );
};

export default SidebarProvider;
