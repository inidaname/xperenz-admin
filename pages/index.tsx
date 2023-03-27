// import Head from "next/head";
import { Box, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import RequireAuth from "@design-system/template/shared/require-auth";
import DashboardLayout from "@design-system/template/layout/dashboard-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RequireAuth>
      <DashboardLayout />
    </RequireAuth>
  );
}
