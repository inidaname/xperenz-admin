import { Box, ColumnStack, FlowStack } from "@design-system/components";
import { joinClasses } from "@design-system/util";
import Head from "next/head";
import React, { memo } from "react";
import { Sidebar } from ".";

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
      <ColumnStack
        as="div"
        className={joinClasses(classstyle, "min-h-screen border-box")}
        {...props}
      >
        <FlowStack
          as="div"
          justifyContent="space-between"
          alignItems="flex-start"
          className="w-full"
          spacing="10"
          pr="10"
        >
          <Sidebar />
          <Box
            shadow="lg"
            flex="1"
            padding="10"
            rounded="lg"
            position="relative"
            top="5"
            minH="full"
          >
            {children}
          </Box>
        </FlowStack>
        <Box>Footer</Box>
      </ColumnStack>
    </>
  );
};

export default memo(DashboardLayout);
