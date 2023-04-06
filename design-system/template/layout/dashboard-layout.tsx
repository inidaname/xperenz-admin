import { Box, HStack, VStack } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import Head from "next/head";
import React, { memo } from "react";
import Sidebar from "./sidebar";

const DashboardLayout: React.FC<IStackLayout> = ({
  children,
  classstyle,
  title,
  ...props
}) => {

  return (
    <>
      <Head>
        <title>{!title && "Xperenz Admin Dashboard"}</title>
      </Head>
      <VStack
        as="div"
        className={joinClasses(classstyle, "min-h-screen border-box")}
        {...props}
      >
        <HStack as="div" justifyContent="space-between" alignItems="flex-start" className="w-full">
          <Sidebar /> {children}
        </HStack>
        <Box as="div">Footer</Box>
      </VStack>
    </>
  );
};

export default memo(DashboardLayout);
