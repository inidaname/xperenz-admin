import { Box, HStack, VStack } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import Head from "next/head";
import React from "react";
import Sidebar from "./sidebar";

const DashboardLayout: React.FC<ILayout> = ({
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
        className={joinClasses(classstyle, "w-screen border-box border")}
        {...props}
      >
        <HStack as="div" className="w-full border">
          <Sidebar /> {children}
        </HStack>
        <Box as="div">Footer</Box>
      </VStack>
    </>
  );
};

export default DashboardLayout;
