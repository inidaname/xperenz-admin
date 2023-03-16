import React from "react";
import ContainerLayout from "@design-system/components/layout/container";
import ScreenWidth from "@design-system/components/layout/screen-width";
import BrandLogo from '@public/img/login-brand-logo.svg'

const AuthLayout: React.FC<IAuthLayoutProps> = ({children}) => {
  return (
    <div className="min-h-[100vh] bg-dashboardBg flex items-center justify-center w-screen">
    <ScreenWidth classstyle="bg-dashboardBg py-[50px] w-fit 3xl:py-[120px] relative">
      <ContainerLayout classstyle="flex !flex-col w-fit !items-center relative space-y-[32px]">
      <BrandLogo />
      {children}
      </ContainerLayout>
      </ScreenWidth>
    </div>
  )
};


export default AuthLayout