import Head from "next/head";
import { Inter } from "next/font/google";
import RequireAuth from "@design-system/template/shared/require-auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RequireAuth>
      <main></main>
    </RequireAuth>
  );
}
