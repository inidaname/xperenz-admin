import React from "react";
import ContainerLayout from "@design-system/components/layout/container";
import ScreenWidth from "@design-system/components/layout/screen-width";
import BrandLogo from '@public/img/login-brand-logo.svg'

const AuthLayout: React.FC<IAuthLayoutProps> = ({children}) => {
  return (
    <div className="min-h-[100vh] bg-dashboardBg">
    <ScreenWidth classstyle="bg-dashboardBg py-[50px] desktop:py-[120px] relative">
      <ContainerLayout classstyle="!flex-col !items-center space-y-[32px]">
      <BrandLogo />
      {children}
      </ContainerLayout>
      </ScreenWidth>
    </div>
  )
};


export default AuthLayout