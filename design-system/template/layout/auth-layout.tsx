import React, { useEffect } from "react";
import ContainerLayout from "@design-system/components/layout/container";
import ScreenWidth from "@design-system/components/layout/screen-width";
import BrandLogo from "@public/img/login-brand-logo.svg";
import Head from "next/head";
import { getSessionToken } from "@helpers/session-manager";
import { useRouter } from "next/router";

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children, title }) => {
  const router = useRouter()
  useEffect(() => {
    if (getSessionToken()) {
      router.push("/")
    }
  }, [])
  return (
    <>
      <Head>
        <meta property="og:title" content={`Admin: ${title}`} key="title" />
      </Head>
      <div className="min-h-[100vh] bg-dashboardBg flex items-center justify-center">
        <ScreenWidth classstyle="bg-dashboardBg py-[50px] w-fit 3xl:py-[120px] relative">
          <ContainerLayout classstyle="flex !flex-col w-fit !items-center relative space-y-[32px]">
            <BrandLogo />
            {children}
          </ContainerLayout>
        </ScreenWidth>
      </div>
    </>
  );
};

export default AuthLayout;
