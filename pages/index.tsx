import React from "react";
import { Inter } from "next/font/google";
import { DashboardLayout, RequireAuth } from "@design-system/template";
import { Box } from "@design-system/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
  return (
    <RequireAuth>
      <DashboardLayout>Home</DashboardLayout>
    </RequireAuth>
  );
}
